// @flow
import type { Dispatch } from 'redux';
import type { ConversationUserLinkType } from 'server/models/ConversationUserLink';
import { push } from 'react-router-redux';

import ConvUserLinkService from 'public/app/services/ConvUserLinkService';

const convUserLinkService = new ConvUserLinkService();

export default function(convUserLinkData: ConversationUserLinkType) {
  return (dispatch: Dispatch, getState: Function) => {
    return convUserLinkService.create(convUserLinkData)
      .then((resp) => {
        dispatch(push('/conversations/mine'));
        // @TODO handle success, error
      });
  }
}
