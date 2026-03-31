export class CommunityJid {
  communityJid: string;
}

export class CommunityCreateDto {
  subject: string;
  description: string;
}

export class CommunityCreateGroupDto {
  subject: string;
  participants: string[];
  parentCommunityJid: string;
}

export class CommunityLinkGroupDto {
  groupJid: string;
  parentCommunityJid: string;
}

export class CommunityInviteCode {
  inviteCode: string;
}

export class CommunityAcceptInvite {
  inviteCode: string;
}

export class CommunityParticipantsUpdateDto {
  communityJid: string;
  participants: string[];
  action: 'add' | 'remove' | 'promote' | 'demote';
}

export class CommunityRequestParticipantsUpdateDto {
  communityJid: string;
  participants: string[];
  action: 'approve' | 'reject';
}

export class CommunitySettingUpdateDto {
  communityJid: string;
  setting: 'announcement' | 'not_announcement' | 'locked' | 'unlocked';
}

export class CommunityMemberAddModeDto {
  communityJid: string;
  mode: 'admin_add' | 'all_member_add';
}

export class CommunityJoinApprovalModeDto {
  communityJid: string;
  mode: 'on' | 'off';
}
