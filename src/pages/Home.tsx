import AnnouncementPanel from '../components/AnnouncementPanel';
import MusicPlayer from '../components/MusicPlayer';

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover block"
      >
        <source src="https://h.v.netease.com/2026/0727/0450c7187b6917acdd9c1b4419b3250b.mp4" />
      </video>

      {/* Hai component fixed độc lập, giống dự án Web */}
      <AnnouncementPanel />
      <MusicPlayer />
    </div>
  );
}
