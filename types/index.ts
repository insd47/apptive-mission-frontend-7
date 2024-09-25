export enum OnlineStatus {
  ONLINE = "온라인",
  OFFLINE = "오프라인",
  AWAY = "부재 중",
  DO_NOT_DISTURB = "다른 용무 중"
}

export enum Job {
  FRONTEND = "프론트엔드 개발자",
  ANDROID = "안드로이드 개발자",
  IOS = "iOS 개발자",
  GAME = "게임 개발자",
  SERVER = "서버 개발자",
  UIUX = "UI/UX 디자이너",
  PROJECT_MANAGER = "프로젝트 매니저"
}

export interface Profile {
  name: string;
  id: string;
  image?: string;
  background?: string;
  status: OnlineStatus;
  job: Job;
  bio: string;
}