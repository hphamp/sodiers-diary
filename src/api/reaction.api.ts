import { Reaction } from 'src/types/reaction.type';
import http from 'src/utils/http';

const URL_REACTIONS = 'reaction';

const reactionApi = {
  getAllReactions() {
    return http.get<Reaction[]>(`${URL_REACTIONS}`);
  },
  getPositiveReactions() {
    return http.get<Reaction[]>(`${URL_REACTIONS}/positive`);
  },
  getNegativeReactions() {
    return http.get<Reaction[]>(`${URL_REACTIONS}/negative`);
  },
};

export default reactionApi;
