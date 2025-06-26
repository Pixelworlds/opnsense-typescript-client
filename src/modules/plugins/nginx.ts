import { BaseModule } from '../base';
import type {
  ApiResponse,
  ApiResult,
  SearchResult,
  ServiceStatus,
  ServiceControl
} from '../../types/common';

// Controller classes
export class NginxBans extends BaseModule {
  /**
   * Execute delban for nginx bans
   */
  async delban(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/bans/delban/${uuid}`, data);
  }

  /**
   * Get get for nginx bans
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/bans/get`);
  }

  /**
   * Execute set for nginx bans
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/bans/set`, data);
  }
}

export class NginxLogs extends BaseModule {
  /**
   * Get accesses for nginx logs
   */
  async accesses(uuid: string, fileno: string, page: string, perPage: string, query: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/logs/accesses/${uuid}/${fileno}/${page}/${perPage}/${query}`);
  }

  /**
   * Get errors for nginx logs
   */
  async errors(uuid: string, fileno: string, page: string, perPage: string, query: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/logs/errors/${uuid}/${fileno}/${page}/${perPage}/${query}`);
  }

  /**
   * Get streamaccesses for nginx logs
   */
  async streamaccesses(uuid: string, fileno: string, page: string, perPage: string, query: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/logs/streamaccesses/${uuid}/${fileno}/${page}/${perPage}/${query}`);
  }

  /**
   * Get streamerrors for nginx logs
   */
  async streamerrors(uuid: string, fileno: string, page: string, perPage: string, query: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/logs/streamerrors/${uuid}/${fileno}/${page}/${perPage}/${query}`);
  }

  /**
   * Get tls handshakes for nginx logs
   */
  async tlsHandshakes(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/logs/tls_handshakes`);
  }
}

export class NginxService extends BaseModule {
  /**
   * Execute reconfigure for nginx service
   */
  async reconfigure(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/nginx/nginx/service/reconfigure`);
  }

  /**
   * Execute restart for nginx service
   */
  async restart(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/nginx/nginx/service/restart`);
  }

  /**
   * Execute start for nginx service
   */
  async start(): Promise<ApiResponse<ServiceControl>> {
    return this.http.post(`/api/nginx/nginx/service/start`);
  }

  /**
   * Get status for nginx service
   */
  async status(): Promise<ApiResponse<ServiceStatus>> {
    return this.http.get(`/api/nginx/nginx/service/status`);
  }

  /**
   * Get stop for nginx service
   */
  async stop(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/service/stop`);
  }

  /**
   * Get vts for nginx service
   */
  async vts(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/service/vts`);
  }
}

export class NginxSettings extends BaseModule {
  /**
   * Execute addcache path for nginx settings
   */
  async addcachePath(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/addcache_path`, data);
  }

  /**
   * Execute addcredential for nginx settings
   */
  async addcredential(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/addcredential`, data);
  }

  /**
   * Execute addcustompolicy for nginx settings
   */
  async addcustompolicy(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/addcustompolicy`, data);
  }

  /**
   * Execute adderrorpage for nginx settings
   */
  async adderrorpage(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/adderrorpage`, data);
  }

  /**
   * Execute addhttprewrite for nginx settings
   */
  async addhttprewrite(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/addhttprewrite`, data);
  }

  /**
   * Execute addhttpserver for nginx settings
   */
  async addhttpserver(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/addhttpserver`, data);
  }

  /**
   * Execute addipacl for nginx settings
   */
  async addipacl(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/addipacl`, data);
  }

  /**
   * Execute addlimit request connection for nginx settings
   */
  async addlimitRequestConnection(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/addlimit_request_connection`, data);
  }

  /**
   * Execute addlimit zone for nginx settings
   */
  async addlimitZone(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/addlimit_zone`, data);
  }

  /**
   * Execute addlocation for nginx settings
   */
  async addlocation(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/addlocation`, data);
  }

  /**
   * Execute addnaxsirule for nginx settings
   */
  async addnaxsirule(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/addnaxsirule`, data);
  }

  /**
   * Execute addresolver for nginx settings
   */
  async addresolver(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/addresolver`, data);
  }

  /**
   * Execute addsecurity header for nginx settings
   */
  async addsecurityHeader(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/addsecurity_header`, data);
  }

  /**
   * Execute addsnifwd for nginx settings
   */
  async addsnifwd(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/addsnifwd`, data);
  }

  /**
   * Execute addstreamserver for nginx settings
   */
  async addstreamserver(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/addstreamserver`, data);
  }

  /**
   * Execute addsyslog target for nginx settings
   */
  async addsyslogTarget(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/addsyslog_target`, data);
  }

  /**
   * Execute addtls fingerprint for nginx settings
   */
  async addtlsFingerprint(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/addtls_fingerprint`, data);
  }

  /**
   * Execute addupstream for nginx settings
   */
  async addupstream(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/addupstream`, data);
  }

  /**
   * Execute addupstreamserver for nginx settings
   */
  async addupstreamserver(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/addupstreamserver`, data);
  }

  /**
   * Execute adduserlist for nginx settings
   */
  async adduserlist(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/adduserlist`, data);
  }

  /**
   * Execute delcache path for nginx settings
   */
  async delcachePath(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/delcache_path/${uuid}`, data);
  }

  /**
   * Execute delcredential for nginx settings
   */
  async delcredential(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/delcredential/${uuid}`, data);
  }

  /**
   * Execute delcustompolicy for nginx settings
   */
  async delcustompolicy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/delcustompolicy/${uuid}`, data);
  }

  /**
   * Execute delerrorpage for nginx settings
   */
  async delerrorpage(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/delerrorpage/${uuid}`, data);
  }

  /**
   * Execute delhttprewrite for nginx settings
   */
  async delhttprewrite(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/delhttprewrite/${uuid}`, data);
  }

  /**
   * Execute delhttpserver for nginx settings
   */
  async delhttpserver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/delhttpserver/${uuid}`, data);
  }

  /**
   * Execute delipacl for nginx settings
   */
  async delipacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/delipacl/${uuid}`, data);
  }

  /**
   * Execute dellimit request connection for nginx settings
   */
  async dellimitRequestConnection(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/dellimit_request_connection/${uuid}`, data);
  }

  /**
   * Execute dellimit zone for nginx settings
   */
  async dellimitZone(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/dellimit_zone/${uuid}`, data);
  }

  /**
   * Execute dellocation for nginx settings
   */
  async dellocation(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/dellocation/${uuid}`, data);
  }

  /**
   * Execute delnaxsirule for nginx settings
   */
  async delnaxsirule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/delnaxsirule/${uuid}`, data);
  }

  /**
   * Execute delresolver for nginx settings
   */
  async delresolver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/delresolver/${uuid}`, data);
  }

  /**
   * Execute delsecurity header for nginx settings
   */
  async delsecurityHeader(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/delsecurity_header/${uuid}`, data);
  }

  /**
   * Execute delsnifwd for nginx settings
   */
  async delsnifwd(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/delsnifwd/${uuid}`, data);
  }

  /**
   * Execute delstreamserver for nginx settings
   */
  async delstreamserver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/delstreamserver/${uuid}`, data);
  }

  /**
   * Execute delsyslog target for nginx settings
   */
  async delsyslogTarget(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/delsyslog_target/${uuid}`, data);
  }

  /**
   * Execute deltls fingerprint for nginx settings
   */
  async deltlsFingerprint(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/deltls_fingerprint/${uuid}`, data);
  }

  /**
   * Execute delupstream for nginx settings
   */
  async delupstream(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/delupstream/${uuid}`, data);
  }

  /**
   * Execute delupstreamserver for nginx settings
   */
  async delupstreamserver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/delupstreamserver/${uuid}`, data);
  }

  /**
   * Execute deluserlist for nginx settings
   */
  async deluserlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/deluserlist/${uuid}`, data);
  }

  /**
   * Execute downloadrules for nginx settings
   */
  async downloadrules(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/downloadrules`, data);
  }

  /**
   * Get get for nginx settings
   */
  async get(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/get`);
  }

  /**
   * Get getcache path for nginx settings
   */
  async getcachePath(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/getcache_path/${uuid}`);
  }

  /**
   * Get getcredential for nginx settings
   */
  async getcredential(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/getcredential/${uuid}`);
  }

  /**
   * Get getcustompolicy for nginx settings
   */
  async getcustompolicy(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/getcustompolicy/${uuid}`);
  }

  /**
   * Get geterrorpage for nginx settings
   */
  async geterrorpage(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/geterrorpage/${uuid}`);
  }

  /**
   * Get gethttprewrite for nginx settings
   */
  async gethttprewrite(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/gethttprewrite/${uuid}`);
  }

  /**
   * Get gethttpserver for nginx settings
   */
  async gethttpserver(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/gethttpserver/${uuid}`);
  }

  /**
   * Get getipacl for nginx settings
   */
  async getipacl(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/getipacl/${uuid}`);
  }

  /**
   * Get getlimit request connection for nginx settings
   */
  async getlimitRequestConnection(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/getlimit_request_connection/${uuid}`);
  }

  /**
   * Get getlimit zone for nginx settings
   */
  async getlimitZone(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/getlimit_zone/${uuid}`);
  }

  /**
   * Get getlocation for nginx settings
   */
  async getlocation(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/getlocation/${uuid}`);
  }

  /**
   * Get getnaxsirule for nginx settings
   */
  async getnaxsirule(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/getnaxsirule/${uuid}`);
  }

  /**
   * Get getresolver for nginx settings
   */
  async getresolver(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/getresolver/${uuid}`);
  }

  /**
   * Get getsecurity header for nginx settings
   */
  async getsecurityHeader(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/getsecurity_header/${uuid}`);
  }

  /**
   * Get getsnifwd for nginx settings
   */
  async getsnifwd(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/getsnifwd/${uuid}`);
  }

  /**
   * Get getstreamserver for nginx settings
   */
  async getstreamserver(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/getstreamserver/${uuid}`);
  }

  /**
   * Get getsyslog target for nginx settings
   */
  async getsyslogTarget(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/getsyslog_target/${uuid}`);
  }

  /**
   * Get gettls fingerprint for nginx settings
   */
  async gettlsFingerprint(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/gettls_fingerprint/${uuid}`);
  }

  /**
   * Get getupstream for nginx settings
   */
  async getupstream(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/getupstream/${uuid}`);
  }

  /**
   * Get getupstreamserver for nginx settings
   */
  async getupstreamserver(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/getupstreamserver/${uuid}`);
  }

  /**
   * Get getuserlist for nginx settings
   */
  async getuserlist(uuid: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/getuserlist/${uuid}`);
  }

  /**
   * Execute set for nginx settings
   */
  async set(data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/set`, data);
  }

  /**
   * Execute setcache path for nginx settings
   */
  async setcachePath(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/setcache_path/${uuid}`, data);
  }

  /**
   * Execute setcredential for nginx settings
   */
  async setcredential(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/setcredential/${uuid}`, data);
  }

  /**
   * Execute setcustompolicy for nginx settings
   */
  async setcustompolicy(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/setcustompolicy/${uuid}`, data);
  }

  /**
   * Execute seterrorpage for nginx settings
   */
  async seterrorpage(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/seterrorpage/${uuid}`, data);
  }

  /**
   * Execute sethttprewrite for nginx settings
   */
  async sethttprewrite(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/sethttprewrite/${uuid}`, data);
  }

  /**
   * Execute sethttpserver for nginx settings
   */
  async sethttpserver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/sethttpserver/${uuid}`, data);
  }

  /**
   * Execute setipacl for nginx settings
   */
  async setipacl(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/setipacl/${uuid}`, data);
  }

  /**
   * Execute setlimit request connection for nginx settings
   */
  async setlimitRequestConnection(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/setlimit_request_connection/${uuid}`, data);
  }

  /**
   * Execute setlimit zone for nginx settings
   */
  async setlimitZone(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/setlimit_zone/${uuid}`, data);
  }

  /**
   * Execute setlocation for nginx settings
   */
  async setlocation(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/setlocation/${uuid}`, data);
  }

  /**
   * Execute setnaxsirule for nginx settings
   */
  async setnaxsirule(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/setnaxsirule/${uuid}`, data);
  }

  /**
   * Execute setresolver for nginx settings
   */
  async setresolver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/setresolver/${uuid}`, data);
  }

  /**
   * Execute setsecurity header for nginx settings
   */
  async setsecurityHeader(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/setsecurity_header/${uuid}`, data);
  }

  /**
   * Execute setsnifwd for nginx settings
   */
  async setsnifwd(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/setsnifwd/${uuid}`, data);
  }

  /**
   * Execute setstreamserver for nginx settings
   */
  async setstreamserver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/setstreamserver/${uuid}`, data);
  }

  /**
   * Execute setsyslog target for nginx settings
   */
  async setsyslogTarget(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/setsyslog_target/${uuid}`, data);
  }

  /**
   * Execute settls fingerprint for nginx settings
   */
  async settlsFingerprint(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/settls_fingerprint/${uuid}`, data);
  }

  /**
   * Execute setupstream for nginx settings
   */
  async setupstream(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/setupstream/${uuid}`, data);
  }

  /**
   * Execute setupstreamserver for nginx settings
   */
  async setupstreamserver(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/setupstreamserver/${uuid}`, data);
  }

  /**
   * Execute setuserlist for nginx settings
   */
  async setuserlist(uuid: string, data?: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/nginx/nginx/settings/setuserlist/${uuid}`, data);
  }

  /**
   * Get showconfig for nginx settings
   */
  async showconfig(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/showconfig`);
  }

  /**
   * Get testconfig for nginx settings
   */
  async testconfig(): Promise<ApiResponse<any>> {
    return this.http.get(`/api/nginx/nginx/settings/testconfig`);
  }
}

// Main module class
export class NginxModule extends BaseModule {
  public readonly bans: NginxBans;
  public readonly logs: NginxLogs;
  public readonly service: NginxService;
  public readonly settings: NginxSettings;

  constructor(http: any) {
    super(http);
    this.bans = new NginxBans(http);
    this.logs = new NginxLogs(http);
    this.service = new NginxService(http);
    this.settings = new NginxSettings(http);
  }

}