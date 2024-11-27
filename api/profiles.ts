import { Job, OnlineStatus, Profile } from "./_types/index.js";

export function GET(request: Request) {
  const authorization = request.headers.get("Authorization")?.split(" ")[1];
  if (authorization !== process.env.API_KEY) {
    return new Response("Unauthorized", { status: 401 });
  }

  const url = request.url.split("/")[0] + "//" + request.url.split("/")[2];

  const random = Math.random();
  if (random < 0.25) {
    return new Response("Internal Server Error", { status: 500 });
  }

  const dummyProfiles: Profile[] = [
    {
      name: "김지원",
      id: "kimjiwon1",
      image: url + "/images/profiles/2EdIX-O2lkI.jpg",
      background: url + "/images/backgrounds/6uCy44FbdqM.jpg",
      status: OnlineStatus.ONLINE,
      job: Job.FRONTEND,
      bio: "반갑습니다! 웹 개발에 관심이 많은 김지원입니다. 사용자 친화적이고 멋진 UI/UX를 만들기 위해 노력하고 있습니다."
    },
    {
      name: "이민석",
      id: "leeminseok0403",
      image: url + "/images/profiles/MTZTGvDsHFY.jpg",
      background: url + "/images/backgrounds/aofRqS6TgFo.jpg",
      status: OnlineStatus.AWAY,
      job: Job.ANDROID,
      bio: "안녕하세요! 안드로이드 앱을 개발하는 이민석입니다. 최신 기술에 관심이 많으며, 사용자들에게 편리한 경험을 제공하고자 노력합니다."
    },
    {
      name: "박지영",
      id: "parkjiyoung1216",
      image: url + "/images/profiles/jzz_3jWMzHA.jpg",
      status: OnlineStatus.DO_NOT_DISTURB,
      job: Job.IOS,
      bio: "반가워요! iOS 앱을 개발하는 박지영입니다. 새로운 아이디어를 구현하고 사용자들에게 즐거움을 주는 앱을 만들기 위해 노력하고 있어요."
    },
    {
      name: "최동현",
      id: "choidonghyun2004",
      background: url + "/images/backgrounds/csxmdSCa4C0.jpg",
      status: OnlineStatus.OFFLINE,
      job: Job.GAME,
      bio: "안녕하세요! 게임 개발에 관심이 많은 최동현입니다. 창의적인 아이디어와 열정으로 재미있는 게임을 만들기 위해 노력하고 있습니다."
    },
    {
      name: "김서연",
      id: "kimseoyeon1998",
      status: OnlineStatus.ONLINE,
      job: Job.SERVER,
      bio: "반가워요! 서버 개발에 관심이 많은 김서연입니다. 안정적이고 확장 가능한 시스템을 구축하여 사용자들에게 최상의 서비스를 제공하고자 노력하고 있어요."
    },
    {
      name: "이지수",
      id: "leejisoo32",
      image: url + "/images/profiles/rDEOVtE7vOs.jpg",
      background: url + "/images/backgrounds/GBIgvxa0HIE.jpg",
      status: OnlineStatus.AWAY,
      job: Job.UIUX,
      bio: "안녕하세요! UI/UX 디자인을 하는 이지수예요. 사용자들의 눈길을 사로잡는 디자인을 만들기 위해 노력하고 있습니다. 팀과의 협업을 통해 최고의 결과물을 창출하고 싶어요."
    },
    {
      name: "박정우",
      id: "parkjungwoo88",
      image: url + "/images/profiles/QEgHL8NN7nM.jpg",
      status: OnlineStatus.DO_NOT_DISTURB,
      job: Job.PROJECT_MANAGER,
      bio: "반가워요! 프로젝트를 관리하는 박정우입니다. 팀원들과의 원활한 커뮤니케이션을 통해 프로젝트를 성공적으로 이끌어내고자 합니다. 함께 일하면서 서로가 성장할 수 있는 환경을 만들어가고 싶어요."
    },
    {
      name: "김민지",
      id: "kimminji0",
      status: OnlineStatus.OFFLINE,
      job: Job.ANDROID,
      bio: "안녕하세요! 안드로이드 앱을 개발하는 김민지입니다. 사용자들의 편의를 위해 최신 기술을 활용하여 기능적이고 성능이 우수한 앱을 만들고자 노력하고 있어요."
    },
    {
      name: "이도윤",
      id: "leedoyoon95",
      image: url + "/images/profiles/ZHvM3XIOHoE.jpg",
      background: url + "/images/backgrounds/uDZ3usCoXB4.jpg",
      status: OnlineStatus.ONLINE,
      job: Job.SERVER,
      bio: "반가워요! 서버 개발에 관심이 많은 이도윤입니다. 안정적이고 확장 가능한 시스템을 설계하고 구현하는 것을 즐기며, 사용자들에게 최상의 서비스를 제공하고자 노력하고 있어요."
    },
    {
      name: "홍성민",
      id: "hongseongmin23",
      status: OnlineStatus.DO_NOT_DISTURB,
      job: Job.FRONTEND,
      bio: "안녕하세요! 웹 개발에 관심이 많은 홍성민입니다. 사용자들의 요구사항을 충족시키고 멋진 인터페이스를 제공하기 위해 노력하고 있습니다. 함께 일하며 성장하는 모습을 보여드리고 싶어요."
    }
  ];

  return new Response(JSON.stringify(dummyProfiles), {
    headers: {
      "content-type": "application/json; charset=UTF-8"
    }
  });
}

export async function POST(request: Request) {
  // 프로필 추가를 위한 function. 우리는 DB 사용을 하지 못하므로 입력값의 Type 검증만 하고 성공 메시지를 반환합니다.

    const authorization = request.headers.get("Authorization")?.split(" ")[1];
    if (authorization !== process.env.API_KEY) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await request.json();

    if (!body.name || typeof body.name !== "string") {
      return new Response("Name is required", { status: 400 });
    }

    if (!body.id || typeof body.id !== "string") {
      return new Response("ID is required", { status: 400 });
    }

    if (!Object.values(Job).includes(body.job)) {
      return new Response("Job is required", { status: 400 });
    }

    if (body.image && typeof body.image !== "string") {
      return new Response("Image must be a string", { status: 400 });
    }

    return new Response("Profile added successfully", {
      headers: {
        "content-type": "text/plain; charset=UTF-8"
      }
    });
}
