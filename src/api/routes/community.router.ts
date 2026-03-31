import { RouterBroker } from '@api/abstract/abstract.router';
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
import { communityController } from '@api/server.module';
import {
  communityCreateGroupSchema,
  communityCreateSchema,
  communityInviteCodeSchema,
  communityJidSchema,
  communityLinkGroupSchema,
  communityParticipantsUpdateSchema,
  communityRequestParticipantsUpdateSchema,
  communitySettingUpdateSchema,
} from '@validate/community.schema';
import { RequestHandler, Router } from 'express';

import { HttpStatus } from './index.router';

export class CommunityRouter extends RouterBroker {
  constructor(...guards: RequestHandler[]) {
    super();
    this.router
      // GET /community/fetchAllParticipating/:instanceName
      .get(this.routerPath('fetchAllParticipating'), ...guards, async (req, res) => {
        const response = await this.dataValidate<any>({
          request: req,
          schema: {},
          ClassRef: Object,
          execute: (instance) => communityController.fetchAllParticipating(instance),
        });

        res.status(HttpStatus.OK).json(response);
      })

      // POST /community/metadata/:instanceName
      .post(this.routerPath('metadata'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CommunityJid>({
          request: req,
          schema: communityJidSchema,
          ClassRef: CommunityJid,
          execute: (instance, data) => communityController.metadata(instance, data),
        });

        res.status(HttpStatus.OK).json(response);
      })

      // POST /community/fetchLinkedGroups/:instanceName
      .post(this.routerPath('fetchLinkedGroups'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CommunityJid>({
          request: req,
          schema: communityJidSchema,
          ClassRef: CommunityJid,
          execute: (instance, data) => communityController.fetchLinkedGroups(instance, data),
        });

        res.status(HttpStatus.OK).json(response);
      })

      // POST /community/create/:instanceName
      .post(this.routerPath('create'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CommunityCreateDto>({
          request: req,
          schema: communityCreateSchema,
          ClassRef: CommunityCreateDto,
          execute: (instance, data) => communityController.create(instance, data),
        });

        res.status(HttpStatus.CREATED).json(response);
      })

      // POST /community/createGroup/:instanceName
      .post(this.routerPath('createGroup'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CommunityCreateGroupDto>({
          request: req,
          schema: communityCreateGroupSchema,
          ClassRef: CommunityCreateGroupDto,
          execute: (instance, data) => communityController.createGroup(instance, data),
        });

        res.status(HttpStatus.CREATED).json(response);
      })

      // POST /community/acceptInvite/:instanceName
      .post(this.routerPath('acceptInvite'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CommunityAcceptInvite>({
          request: req,
          schema: communityInviteCodeSchema,
          ClassRef: CommunityAcceptInvite,
          execute: (instance, data) => communityController.acceptInvite(instance, data),
        });

        res.status(HttpStatus.OK).json(response);
      })

      // POST /community/getInviteInfo/:instanceName
      .post(this.routerPath('getInviteInfo'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CommunityInviteCode>({
          request: req,
          schema: communityInviteCodeSchema,
          ClassRef: CommunityInviteCode,
          execute: (instance, data) => communityController.getInviteInfo(instance, data),
        });

        res.status(HttpStatus.OK).json(response);
      })

      // GET /community/inviteCode/:instanceName (communityJid via query)
      .get(this.routerPath('inviteCode'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CommunityJid>({
          request: req,
          schema: communityJidSchema,
          ClassRef: CommunityJid,
          execute: (instance, data) => communityController.inviteCode(instance, data),
        });

        res.status(HttpStatus.OK).json(response);
      })

      // DELETE /community/leave/:instanceName
      .delete(this.routerPath('leave'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CommunityJid>({
          request: req,
          schema: communityJidSchema,
          ClassRef: CommunityJid,
          execute: (instance, data) => communityController.leave(instance, data),
        });

        res.status(HttpStatus.OK).json(response);
      })

      // PUT /community/linkGroup/:instanceName
      .put(this.routerPath('linkGroup'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CommunityLinkGroupDto>({
          request: req,
          schema: communityLinkGroupSchema,
          ClassRef: CommunityLinkGroupDto,
          execute: (instance, data) => communityController.linkGroup(instance, data),
        });

        res.status(HttpStatus.OK).json(response);
      })

      // PUT /community/unlinkGroup/:instanceName
      .put(this.routerPath('unlinkGroup'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CommunityLinkGroupDto>({
          request: req,
          schema: communityLinkGroupSchema,
          ClassRef: CommunityLinkGroupDto,
          execute: (instance, data) => communityController.unlinkGroup(instance, data),
        });

        res.status(HttpStatus.OK).json(response);
      })

      // PUT /community/participants/:instanceName
      .put(this.routerPath('participants'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CommunityParticipantsUpdateDto>({
          request: req,
          schema: communityParticipantsUpdateSchema,
          ClassRef: CommunityParticipantsUpdateDto,
          execute: (instance, data) => communityController.participantsUpdate(instance, data),
        });

        res.status(HttpStatus.OK).json(response);
      })

      // GET /community/requestParticipantsList/:instanceName (communityJid via query)
      .get(this.routerPath('requestParticipantsList'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CommunityJid>({
          request: req,
          schema: communityJidSchema,
          ClassRef: CommunityJid,
          execute: (instance, data) => communityController.requestParticipantsList(instance, data),
        });

        res.status(HttpStatus.OK).json(response);
      })

      // PUT /community/requestParticipantsUpdate/:instanceName
      .put(this.routerPath('requestParticipantsUpdate'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CommunityRequestParticipantsUpdateDto>({
          request: req,
          schema: communityRequestParticipantsUpdateSchema,
          ClassRef: CommunityRequestParticipantsUpdateDto,
          execute: (instance, data) => communityController.requestParticipantsUpdate(instance, data),
        });

        res.status(HttpStatus.OK).json(response);
      })

      // PUT /community/settingUpdate/:instanceName
      .put(this.routerPath('settingUpdate'), ...guards, async (req, res) => {
        const response = await this.dataValidate<CommunitySettingUpdateDto>({
          request: req,
          schema: communitySettingUpdateSchema,
          ClassRef: CommunitySettingUpdateDto,
          execute: (instance, data) => communityController.settingUpdate(instance, data),
        });

        res.status(HttpStatus.OK).json(response);
      });
  }

  public readonly router: Router = Router();
}
