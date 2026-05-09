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
        <source src="https://h.v.netease.com/2026/0129/674a59fc6ca1f94a7c112096cb398755.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
