import session = require('express-session');

function bStaff(session: any) {
  if (!session || !session.staff || session.staff.length <= 0) {
    return false;
  }
  return true;
}
