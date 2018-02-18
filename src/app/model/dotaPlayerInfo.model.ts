export interface DotaPlayerInfoModel {
  solo_competetive_rank: number;
  competitive_rank: number;
  profile: {
    account_id: number;
    personaname: string;
    cheese: number;
    steamid: number;
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    profileurl: string;
    loccountrycode: string;
  };
  mmr_estimate: {
    estimate: number;
  };


}
