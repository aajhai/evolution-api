import {
  CommunityAcceptInvite,
  CommunityCreateDto,
  CommunityCreateGroupDto,
  CommunityInviteCode,
  CommunityJid,
  CommunityLinkGroupDto,
  CommunityParticipantsUpdateDto,
  CommunityRequestParticipantsUpdateDto,
  CommunitySettingUpdateDto,
} from '@api/dto/community.dto';
import { InstanceDto } from '@api/dto/instance.dto';
import { WAMonitoringService } from '@api/services/monitor.service';

export class CommunityController {
  constructor(private readonly waMonitor: WAMonitoringService) {}

  public async metadata(instance: InstanceDto, data: CommunityJid) {
    return await this.waMonitor.waInstances[instance.instanceName].communityMetadata(data);
  }

  public async fetchAllParticipating(instance: InstanceDto) {
    return await this.waMonitor.waInstances[instance.instanceName].communityFetchAllParticipating();
  }

  public async fetchLinkedGroups(instance: InstanceDto, data: CommunityJid) {
    return await this.waMonitor.waInstances[instance.instanceName].communityFetchLinkedGroups(data);
  }

  public async create(instance: InstanceDto, data: CommunityCreateDto) {
    return await this.waMonitor.waInstances[instance.instanceName].communityCreate(data);
  }

  public async createGroup(instance: InstanceDto, data: CommunityCreateGroupDto) {
    return await this.waMonitor.waInstances[instance.instanceName].communityCreateGroup(data);
  }

  public async leave(instance: InstanceDto, data: CommunityJid) {
    return await this.waMonitor.waInstances[instance.instanceName].communityLeave(data);
  }

  public async linkGroup(instance: InstanceDto, data: CommunityLinkGroupDto) {
    return await this.waMonitor.waInstances[instance.instanceName].communityLinkGroup(data);
  }

  public async unlinkGroup(instance: InstanceDto, data: CommunityLinkGroupDto) {
    return await this.waMonitor.waInstances[instance.instanceName].communityUnlinkGroup(data);
  }

  public async inviteCode(instance: InstanceDto, data: CommunityJid) {
    return await this.waMonitor.waInstances[instance.instanceName].communityInviteCode(data);
  }

  public async acceptInvite(instance: InstanceDto, data: CommunityAcceptInvite) {
    return await this.waMonitor.waInstances[instance.instanceName].communityAcceptInvite(data);
  }

  public async getInviteInfo(instance: InstanceDto, data: CommunityInviteCode) {
    return await this.waMonitor.waInstances[instance.instanceName].communityGetInviteInfo(data);
  }

  public async participantsUpdate(instance: InstanceDto, data: CommunityParticipantsUpdateDto) {
    return await this.waMonitor.waInstances[instance.instanceName].communityParticipantsUpdate(data);
  }

  public async requestParticipantsList(instance: InstanceDto, data: CommunityJid) {
    return await this.waMonitor.waInstances[instance.instanceName].communityRequestParticipantsList(data);
  }

  public async requestParticipantsUpdate(instance: InstanceDto, data: CommunityRequestParticipantsUpdateDto) {
    return await this.waMonitor.waInstances[instance.instanceName].communityRequestParticipantsUpdate(data);
  }

  public async settingUpdate(instance: InstanceDto, data: CommunitySettingUpdateDto) {
    return await this.waMonitor.waInstances[instance.instanceName].communitySettingUpdate(data);
  }
}
