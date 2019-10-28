function bStaff(session: any) {
  if (!session || !session.staff) {
    return false;
  }
  return true;
}

export { bStaff };
