import type {
      ApiResponse,
      ApiResult,
      SearchResult,
      BaseRecord,
      ServiceStatus,
      ServiceControl,
      ConfigTest,
      CrudOperations,
      ServiceOperations,
      SettingsOperations
    } from './common';

// Controller interfaces
export interface NginxBansController {
  /** Execute delban for nginx bans */
  delban(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for nginx bans */
  get(): Promise<ApiResponse<any>>;
  /** Execute set for nginx bans */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
}
export interface NginxLogsController {
  /** Get accesses for nginx logs */
  accesses(uuid: string): Promise<ApiResponse<any>>;
  /** Get errors for nginx logs */
  errors(uuid: string): Promise<ApiResponse<any>>;
  /** Get streamaccesses for nginx logs */
  streamaccesses(uuid: string): Promise<ApiResponse<any>>;
  /** Get streamerrors for nginx logs */
  streamerrors(uuid: string): Promise<ApiResponse<any>>;
  /** Get tls handshakes for nginx logs */
  tlsHandshakes(): Promise<ApiResponse<any>>;
}
export interface NginxServiceController {
  /** Execute reconfigure for nginx service */
  reconfigure(): Promise<ApiResponse<ServiceControl>>;
  /** Execute restart for nginx service */
  restart(): Promise<ApiResponse<ServiceControl>>;
  /** Execute start for nginx service */
  start(): Promise<ApiResponse<ServiceControl>>;
  /** Get status for nginx service */
  status(): Promise<ApiResponse<ServiceStatus>>;
  /** Get stop for nginx service */
  stop(): Promise<ApiResponse<any>>;
  /** Get vts for nginx service */
  vts(): Promise<ApiResponse<any>>;
}
export interface NginxSettingsController {
  /** Execute addcache path for nginx settings */
  addcachePath(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addcredential for nginx settings */
  addcredential(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addcustompolicy for nginx settings */
  addcustompolicy(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute adderrorpage for nginx settings */
  adderrorpage(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addhttprewrite for nginx settings */
  addhttprewrite(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addhttpserver for nginx settings */
  addhttpserver(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addipacl for nginx settings */
  addipacl(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addlimit request connection for nginx settings */
  addlimitRequestConnection(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addlimit zone for nginx settings */
  addlimitZone(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addlocation for nginx settings */
  addlocation(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addnaxsirule for nginx settings */
  addnaxsirule(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addresolver for nginx settings */
  addresolver(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addsecurity header for nginx settings */
  addsecurityHeader(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addsnifwd for nginx settings */
  addsnifwd(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addstreamserver for nginx settings */
  addstreamserver(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addsyslog target for nginx settings */
  addsyslogTarget(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addtls fingerprint for nginx settings */
  addtlsFingerprint(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addupstream for nginx settings */
  addupstream(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute addupstreamserver for nginx settings */
  addupstreamserver(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute adduserlist for nginx settings */
  adduserlist(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delcache path for nginx settings */
  delcachePath(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delcredential for nginx settings */
  delcredential(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delcustompolicy for nginx settings */
  delcustompolicy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delerrorpage for nginx settings */
  delerrorpage(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delhttprewrite for nginx settings */
  delhttprewrite(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delhttpserver for nginx settings */
  delhttpserver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delipacl for nginx settings */
  delipacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute dellimit request connection for nginx settings */
  dellimitRequestConnection(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute dellimit zone for nginx settings */
  dellimitZone(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute dellocation for nginx settings */
  dellocation(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delnaxsirule for nginx settings */
  delnaxsirule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delresolver for nginx settings */
  delresolver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delsecurity header for nginx settings */
  delsecurityHeader(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delsnifwd for nginx settings */
  delsnifwd(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delstreamserver for nginx settings */
  delstreamserver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delsyslog target for nginx settings */
  delsyslogTarget(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute deltls fingerprint for nginx settings */
  deltlsFingerprint(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delupstream for nginx settings */
  delupstream(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute delupstreamserver for nginx settings */
  delupstreamserver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute deluserlist for nginx settings */
  deluserlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute downloadrules for nginx settings */
  downloadrules(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get get for nginx settings */
  get(): Promise<ApiResponse<any>>;
  /** Get getcache path for nginx settings */
  getcachePath(uuid: string): Promise<ApiResponse<any>>;
  /** Get getcredential for nginx settings */
  getcredential(uuid: string): Promise<ApiResponse<any>>;
  /** Get getcustompolicy for nginx settings */
  getcustompolicy(uuid: string): Promise<ApiResponse<any>>;
  /** Get geterrorpage for nginx settings */
  geterrorpage(uuid: string): Promise<ApiResponse<any>>;
  /** Get gethttprewrite for nginx settings */
  gethttprewrite(uuid: string): Promise<ApiResponse<any>>;
  /** Get gethttpserver for nginx settings */
  gethttpserver(uuid: string): Promise<ApiResponse<any>>;
  /** Get getipacl for nginx settings */
  getipacl(uuid: string): Promise<ApiResponse<any>>;
  /** Get getlimit request connection for nginx settings */
  getlimitRequestConnection(uuid: string): Promise<ApiResponse<any>>;
  /** Get getlimit zone for nginx settings */
  getlimitZone(uuid: string): Promise<ApiResponse<any>>;
  /** Get getlocation for nginx settings */
  getlocation(uuid: string): Promise<ApiResponse<any>>;
  /** Get getnaxsirule for nginx settings */
  getnaxsirule(uuid: string): Promise<ApiResponse<any>>;
  /** Get getresolver for nginx settings */
  getresolver(uuid: string): Promise<ApiResponse<any>>;
  /** Get getsecurity header for nginx settings */
  getsecurityHeader(uuid: string): Promise<ApiResponse<any>>;
  /** Get getsnifwd for nginx settings */
  getsnifwd(uuid: string): Promise<ApiResponse<any>>;
  /** Get getstreamserver for nginx settings */
  getstreamserver(uuid: string): Promise<ApiResponse<any>>;
  /** Get getsyslog target for nginx settings */
  getsyslogTarget(uuid: string): Promise<ApiResponse<any>>;
  /** Get gettls fingerprint for nginx settings */
  gettlsFingerprint(uuid: string): Promise<ApiResponse<any>>;
  /** Get getupstream for nginx settings */
  getupstream(uuid: string): Promise<ApiResponse<any>>;
  /** Get getupstreamserver for nginx settings */
  getupstreamserver(uuid: string): Promise<ApiResponse<any>>;
  /** Get getuserlist for nginx settings */
  getuserlist(uuid: string): Promise<ApiResponse<any>>;
  /** Execute set for nginx settings */
  set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setcache path for nginx settings */
  setcachePath(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setcredential for nginx settings */
  setcredential(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setcustompolicy for nginx settings */
  setcustompolicy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute seterrorpage for nginx settings */
  seterrorpage(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute sethttprewrite for nginx settings */
  sethttprewrite(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute sethttpserver for nginx settings */
  sethttpserver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setipacl for nginx settings */
  setipacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setlimit request connection for nginx settings */
  setlimitRequestConnection(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setlimit zone for nginx settings */
  setlimitZone(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setlocation for nginx settings */
  setlocation(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setnaxsirule for nginx settings */
  setnaxsirule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setresolver for nginx settings */
  setresolver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setsecurity header for nginx settings */
  setsecurityHeader(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setsnifwd for nginx settings */
  setsnifwd(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setstreamserver for nginx settings */
  setstreamserver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setsyslog target for nginx settings */
  setsyslogTarget(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute settls fingerprint for nginx settings */
  settlsFingerprint(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setupstream for nginx settings */
  setupstream(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setupstreamserver for nginx settings */
  setupstreamserver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Execute setuserlist for nginx settings */
  setuserlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>>;
  /** Get showconfig for nginx settings */
  showconfig(): Promise<ApiResponse<any>>;
  /** Get testconfig for nginx settings */
  testconfig(): Promise<ApiResponse<any>>;
}

// Main module interface
export interface NginxModule {
  bans: NginxBansController;
  logs: NginxLogsController;
  service: NginxServiceController;
  settings: NginxSettingsController;
}

// Record interfaces
export interface NginxRecord extends BaseRecord {
 
  [key: string]: any;
}