import { toast } from 'react-toastify';

let isTvClicked = false;
let isSoundPlying = false;
let isFakeDoorKnocked = false;

const getAnotherElementById = (element, id) => {
  return element.parent.children.filter((element) => element.attrs.id == id)[0]
}

const showElementSoftly = (element, duration) => {
  let cnt = 0;
  const timer = setInterval(() => {
    element.setOpacity(cnt / 100)
    cnt++;
  }, duration / 100)
  setTimeout(() => {
    clearInterval(timer)
  }, duration + 100)
}

function playAudio(url) {
  if (isSoundPlying || !isTvClicked) return
  isSoundPlying = true;
  const audio = new Audio(url)
  audio.addEventListener('ended', () => { isSoundPlying = false; })
  audio.play();
}

const Objects = [
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/red-area.png',
    id: "red-area",
    x: 1758,
    y: 860,
    isHover: false,
    opacity: 0,
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/scan-monitor.png',
    id: "monitor",
    x: 3275,
    y: 650,
    isHover: false,
    opacity: 0,
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/tv.png',
    id: "tv",
    x: 1930,
    y: 575,
    isHover: false,
    onClick: (e) => {
      if (isTvClicked) return;
      toast.error("هشدار! ماده‌ای رادیو اکتیو خارج از محیط آزمایش یافت شد!")
      isTvClicked = true;
      const redArea = getAnotherElementById(e.target, "red-area");
      const monitor = getAnotherElementById(e.target, "monitor");
      playAudio(process.env.PUBLIC_URL + '/Room0/scan.wav');
      showElementSoftly(redArea, 2000);
      showElementSoftly(monitor, 1000);
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/wall-layer-fake.png',
    id: "wall1",
    x: 645,
    y: 850,
    isHover: false,
    onClick: (e) => {
      playAudio(process.env.PUBLIC_URL + '/Room0/bang1.mp3');
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/wall-layer-fake.png',
    id: "wall2",
    x: 970,
    y: 850,
    isHover: false,
    onClick: (e) => {
      playAudio(process.env.PUBLIC_URL + '/Room0/bang1.mp3');
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/wall-layer-fake.png',
    id: "wall3",
    x: 1290,
    y: 850,
    isHover: false,
    onClick: (e) => {
      playAudio(process.env.PUBLIC_URL + '/Room0/bang1.mp3');
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/wall-layer-fake.png',
    id: "wall4",
    x: 1614,
    y: 850,
    isHover: false,
    onClick: (e) => {
      playAudio(process.env.PUBLIC_URL + '/Room0/bang1.mp3');
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/wall-layer-fake.png',
    id: "wall5",
    x: 2255,
    y: 850,
    isHover: false,
    onClick: (e) => {
      playAudio(process.env.PUBLIC_URL + '/Room0/bang1.mp3');
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/wall-layer-fake.png',
    id: "wall6",
    x: 2576,
    y: 850,
    isHover: false,
    onClick: (e) => {
      if (!isFakeDoorKnocked) {
        isFakeDoorKnocked = true;
        playAudio(process.env.PUBLIC_URL + '/Room0/bang2.mp3');
      } else {
        toast.info("اوه! بذار ببینم پشت اینجا چیه...");
        playAudio(process.env.PUBLIC_URL + '/Room0/bang2.mp3');
        setTimeout(() => {
          window.location.href = '/room1';
        }, 6000)
      }
    },
  },
  {
    imageUrl: process.env.PUBLIC_URL + '/Room0/wall-layer-fake.png',
    id: "wall7",
    x: 2898,
    y: 850,
    isHover: false,
    onClick: (e) => {
      playAudio(process.env.PUBLIC_URL + '/Room0/bang1.mp3');
    },
  },
]

export default Objects;
