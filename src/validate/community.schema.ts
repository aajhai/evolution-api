import { JSONSchema7 } from 'json-schema';
import { v4 } from 'uuid';

const isNotEmpty = (...propertyNames: string[]): JSONSchema7 => {
  const properties = {};
  propertyNames.forEach(
    (property) =>
      (properties[property] = {
        minLength: 1,
        description: `The "${property}" cannot be empty`,
      }),
  );
  return {
    if: {
      propertyNames: {
        enum: [...propertyNames],
      },
    },
    then: { properties },
  };
};

export const communityJidSchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    communityJid: { type: 'string', pattern: '^[\\d-]+@g.us$' },
  },
  required: ['communityJid'],
  ...isNotEmpty('communityJid'),
};

export const communityCreateSchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    subject: { type: 'string' },
    description: { type: 'string' },
  },
  required: ['subject', 'description'],
  ...isNotEmpty('subject', 'description'),
};

export const communityCreateGroupSchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    subject: { type: 'string' },
    parentCommunityJid: { type: 'string' },
    participants: {
      type: 'array',
      minItems: 1,
      uniqueItems: true,
      items: {
        type: 'string',
        minLength: 10,
        pattern: '\\d+',
        description: '"participants" must be an array of numeric strings',
      },
    },
  },
  required: ['subject', 'participants', 'parentCommunityJid'],
  ...isNotEmpty('subject', 'parentCommunityJid'),
};

export const communityLinkGroupSchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    groupJid: { type: 'string' },
    parentCommunityJid: { type: 'string' },
  },
  required: ['groupJid', 'parentCommunityJid'],
  ...isNotEmpty('groupJid', 'parentCommunityJid'),
};

export const communityInviteCodeSchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    inviteCode: { type: 'string' },
  },
  required: ['inviteCode'],
  ...isNotEmpty('inviteCode'),
};

export const communityParticipantsUpdateSchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    communityJid: { type: 'string' },
    action: {
      type: 'string',
      enum: ['add', 'remove', 'promote', 'demote'],
    },
    participants: {
      type: 'array',
      minItems: 1,
      uniqueItems: true,
      items: {
        type: 'string',
        minLength: 10,
        pattern: '\\d+',
        description: '"participants" must be an array of numeric strings',
      },
    },
  },
  required: ['communityJid', 'action', 'participants'],
  ...isNotEmpty('communityJid', 'action'),
};

export const communityRequestParticipantsUpdateSchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    communityJid: { type: 'string' },
    action: {
      type: 'string',
      enum: ['approve', 'reject'],
    },
    participants: {
      type: 'array',
      minItems: 1,
      uniqueItems: true,
      items: {
        type: 'string',
      },
    },
  },
  required: ['communityJid', 'action', 'participants'],
  ...isNotEmpty('communityJid', 'action'),
};

export const communitySettingUpdateSchema: JSONSchema7 = {
  $id: v4(),
  type: 'object',
  properties: {
    communityJid: { type: 'string' },
    setting: {
      type: 'string',
      enum: ['announcement', 'not_announcement', 'locked', 'unlocked'],
    },
  },
  required: ['communityJid', 'setting'],
  ...isNotEmpty('communityJid', 'setting'),
};
