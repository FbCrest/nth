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
        <source src="https://h.v.netease.com/2026/0824/03d818017e3a33127a7c44d991043b76.mp4" />
      </video>

      {/* Hai component fixed độc lập, giống dự án Web */}
      <AnnouncementPanel />
      <MusicPlayer />
    </div>
  );
}
