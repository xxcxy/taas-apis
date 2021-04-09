/**
 * App constants
 */

const UserRoles = {
  BookingManager: 'bookingmanager',
  Administrator: 'administrator',
  ConnectManager: 'Connect Manager'
}

const FullManagePermissionRoles = [
  UserRoles.BookingManager,
  UserRoles.Administrator
]

const Scopes = {
  // job
  READ_JOB: 'read:taas-jobs',
  CREATE_JOB: 'create:taas-jobs',
  UPDATE_JOB: 'update:taas-jobs',
  DELETE_JOB: 'delete:taas-jobs',
  ALL_JOB: 'all:taas-jobs',
  // job candidate
  READ_JOB_CANDIDATE: 'read:taas-jobCandidates',
  CREATE_JOB_CANDIDATE: 'create:taas-jobCandidates',
  UPDATE_JOB_CANDIDATE: 'update:taas-jobCandidates',
  DELETE_JOB_CANDIDATE: 'delete:taas-jobCandidates',
  ALL_JOB_CANDIDATE: 'all:taas-jobCandidates',
  // resource booking
  READ_RESOURCE_BOOKING: 'read:taas-resourceBookings',
  CREATE_RESOURCE_BOOKING: 'create:taas-resourceBookings',
  UPDATE_RESOURCE_BOOKING: 'update:taas-resourceBookings',
  DELETE_RESOURCE_BOOKING: 'delete:taas-resourceBookings',
  ALL_RESOURCE_BOOKING: 'all:taas-resourceBookings',
  // taas-team
  READ_TAAS_TEAM: 'read:taas-teams',
  // work period
  READ_WORK_PERIOD: 'read:taas-workPeriods',
  CREATE_WORK_PERIOD: 'create:taas-workPeriods',
  UPDATE_WORK_PERIOD: 'update:taas-workPeriods',
  DELETE_WORK_PERIOD: 'delete:taas-workPeriods',
  ALL_WORK_PERIOD: 'all:taas-workPeriods',
  // work period payment
  READ_WORK_PERIOD_PAYMENT: 'read:taas-workPeriodPayments',
  CREATE_WORK_PERIOD_PAYMENT: 'create:taas-workPeriodPayments',
  UPDATE_WORK_PERIOD_PAYMENT: 'update:taas-workPeriodPayments',
  ALL_WORK_PERIOD_PAYMENT: 'all:taas-workPeriodPayments'
}

module.exports = {
  UserRoles,
  FullManagePermissionRoles,
  Scopes
}
