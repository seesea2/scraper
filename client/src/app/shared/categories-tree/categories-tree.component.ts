import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener
} from '@angular/material/tree';
import { Observable, of as observableOf } from 'rxjs';

import {
  Category,
  CategoryNode,
  CategoryFlatNode
} from '../../core/products-interface';
import { ProductsApiService } from '../../core/services/products-api.service';

@Component({
  selector: 'categories-tree',
  templateUrl: './categories-tree.component.html',
  styleUrls: ['./categories-tree.component.css']
})
export class CategoriesTreeComponent implements OnInit {
  categories: any[];
  categoriesTree: CategoryNode[];
  categoriesErr: string;
  treeControl: FlatTreeControl<CategoryFlatNode>;
  treeFlattener: MatTreeFlattener<CategoryNode, CategoryFlatNode>;
  dataSource: MatTreeFlatDataSource<CategoryNode, CategoryFlatNode>;

  constructor(
    private productsApiService: ProductsApiService,
    private router: Router
  ) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this._getLevel,
      this._isExpandable,
      this._getChildren
    );
    this.treeControl = new FlatTreeControl<CategoryFlatNode>(
      this._getLevel,
      this._isExpandable
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
  }

  transformer = (node: CategoryNode, level: number) => {
    return new CategoryFlatNode(
      !!node.children,
      node.name,
      node.category,
      level
    );
  };

  private _getLevel = (node: CategoryFlatNode) => node.level;

  private _isExpandable = (node: CategoryFlatNode) => node.expandable;

  private _getChildren = (node: CategoryNode): Observable<CategoryNode[]> =>
    observableOf(node.children);

  hasChild = (_: number, _nodeData: CategoryFlatNode) => _nodeData.expandable;

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.productsApiService.getCategories().subscribe(
      categories => {
        this.categories = categories;
        this.buildCategoriesTree();
      },
      err => {
        this.categoriesErr = err.error;
      }
    );
  }

  showCatalog(category: string) {
    return this.router.navigate(['/gifts/browse', { category: category }]);
  }

  buildCategoriesTree() {
    this.categoriesTree = [];

    this.categories.forEach(category => {
      const node = new CategoryNode();
      node.name = category.name;
      node.parent = category.parent;
      node.category = category.category;
      node.children = null;

      if (!node.parent) {
        this.categoriesTree.push(node);
      } else {
        this.categoriesTree.forEach(categoryNode => {
          if (categoryNode.name.toLowerCase() == node.parent.toLowerCase()) {
            if (!categoryNode.children) {
              categoryNode.children = [];
            }
            categoryNode.children.push(node);
          }
        });
      }
    });

    this.dataSource.data = this.categoriesTree;
  }
}
