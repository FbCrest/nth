export default function Home() {
  return (
    <div className="w-full h-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover block"
      >
        <source src="https://h.v.netease.com/2026/0618/c0b863d0de9ed6325bc21a47810a9666.mp4" />
      </video>
    </div>
  );
}
