import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Loader2 } from 'lucide-react';

interface DungeonVideo {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  duration: string;
  difficulty: string;
}

interface DungeonSeason {
  id: number;
  label: string;
  videos: DungeonVideo[];
}

interface DungeonGuideProps {
  type: '6-player' | '12-player';
}

const generateMockData = (): DungeonSeason[] => {
  const seasons: DungeonSeason[] = [];
  
  seasons.push({
    id: 1,
    label: 'Vũ Dương Thành',
    videos: [
      { id: '5iePNPvkdKY', title: 'Boss 123 Thường', thumbnail: 'https://img.youtube.com/vi/5iePNPvkdKY/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=5iePNPvkdKY', duration: 'HD', difficulty: 'Thường' },
      { id: 'G85kIkOY-Eo', title: 'Boss 456 Thường', thumbnail: 'https://img.youtube.com/vi/G85kIkOY-Eo/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=G85kIkOY-Eo', duration: 'HD', difficulty: 'Thường' },
      { id: 'sKJ9a_4iltg', title: 'Boss 1-6 Anh Hùng', thumbnail: 'https://img.youtube.com/vi/sKJ9a_4iltg/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=sKJ9a_4iltg', duration: 'HD', difficulty: 'Anh Hùng' }
    ]
  });

  seasons.push({
    id: 2,
    label: 'Kính Thiên Các',
    videos: [
      { id: 'SenwqOPxUDI', title: 'Boss 123 Thường', thumbnail: 'https://img.youtube.com/vi/SenwqOPxUDI/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=SenwqOPxUDI', duration: 'HD', difficulty: 'Thường' },
      { id: 'A49pcBOfUZU', title: 'Boss 456 Thường', thumbnail: 'https://img.youtube.com/vi/A49pcBOfUZU/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=A49pcBOfUZU', duration: 'HD', difficulty: 'Thường' }
    ]
  });

  seasons.push({
    id: 3,
    label: 'Lục Đạo Minh Đồ',
    videos: [
      { id: 'SRCqPEUjKj8', title: 'Boss 123 Thường', thumbnail: 'https://img.youtube.com/vi/SRCqPEUjKj8/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=SRCqPEUjKj8', duration: 'HD', difficulty: 'Thường' },
      { id: '6sWOEebyTDY', title: 'Boss 45 Thường', thumbnail: 'https://img.youtube.com/vi/6sWOEebyTDY/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=6sWOEebyTDY', duration: 'HD', difficulty: 'Thường' },
      { id: 'C0fC_zlnr3U', title: 'Boss 6 Thường', thumbnail: 'https://img.youtube.com/vi/C0fC_zlnr3U/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=C0fC_zlnr3U', duration: 'HD', difficulty: 'Thường' },
      { id: 'PzhjvtTI8Y0', title: 'Boss 45 Anh Hùng', thumbnail: 'https://img.youtube.com/vi/PzhjvtTI8Y0/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=PzhjvtTI8Y0', duration: 'HD', difficulty: 'Anh Hùng' },
      { id: 'Iek4ZBOQOFk', title: 'Thử Thách Vinh Dự Boss 123 Tuần 1', thumbnail: 'https://img.youtube.com/vi/Iek4ZBOQOFk/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=Iek4ZBOQOFk', duration: 'HD', difficulty: 'Thử Thách Vinh Dự' },
      { id: 'Ran8E1sB1Y0', title: 'Thử Thách Vinh Dự Boss 123 Tuần 2', thumbnail: 'https://img.youtube.com/vi/Ran8E1sB1Y0/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=Ran8E1sB1Y0', duration: 'HD', difficulty: 'Thử Thách Vinh Dự' },
      { id: 'G4DYtMpLQNA', title: 'Thử Thách Vinh Dự Boss 123 Tuần 3', thumbnail: 'https://img.youtube.com/vi/G4DYtMpLQNA/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=G4DYtMpLQNA', duration: 'HD', difficulty: 'Thử Thách Vinh Dự' },
      { id: 'oPzQpcSHoUU', title: 'Thử Thách Vinh Dự Boss 456 Tuần 1', thumbnail: 'https://img.youtube.com/vi/oPzQpcSHoUU/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=oPzQpcSHoUU', duration: 'HD', difficulty: 'Thử Thách Vinh Dự' },
      { id: 'sxFXI2eRaTw', title: 'Thử Thách Vinh Dự Boss 456 Tuần 2', thumbnail: 'https://img.youtube.com/vi/sxFXI2eRaTw/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=sxFXI2eRaTw', duration: 'HD', difficulty: 'Thử Thách Vinh Dự' }
    ]
  });

  seasons.push({
    id: 4,
    label: 'Quan Sơn Tàng Phong',
    videos: [
      { id: 'Hbf7kCWxxoI', title: 'Boss 123 Thường', thumbnail: 'https://img.youtube.com/vi/Hbf7kCWxxoI/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=Hbf7kCWxxoI', duration: 'HD', difficulty: 'Thường' },
      { id: 'Kiw4hKy8yuI', title: 'Boss 45 Thường', thumbnail: 'https://img.youtube.com/vi/Kiw4hKy8yuI/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=Kiw4hKy8yuI', duration: 'HD', difficulty: 'Thường' },
      { id: '2OQoXWDqn9s', title: 'Boss 6 Thường', thumbnail: 'https://img.youtube.com/vi/2OQoXWDqn9s/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=2OQoXWDqn9s', duration: 'HD', difficulty: 'Thường' },
      { id: '3uNIGWQG2lY', title: 'Boss 123 Anh Hùng', thumbnail: 'https://img.youtube.com/vi/3uNIGWQG2lY/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=3uNIGWQG2lY', duration: 'HD', difficulty: 'Anh Hùng' },
      { id: 'u53TSjVWQFY', title: 'Boss 45 Anh Hùng', thumbnail: 'https://img.youtube.com/vi/u53TSjVWQFY/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=u53TSjVWQFY', duration: 'HD', difficulty: 'Anh Hùng' },
      { id: 'J6wrwNv1SbA', title: 'Boss 6 Anh Hùng', thumbnail: 'https://img.youtube.com/vi/J6wrwNv1SbA/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=J6wrwNv1SbA', duration: 'HD', difficulty: 'Anh Hùng' },
      { id: 'SVw9MTU_mL8', title: 'Thử Thách Vinh Dự Boss 123 Tuần 1', thumbnail: 'https://img.youtube.com/vi/SVw9MTU_mL8/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=SVw9MTU_mL8', duration: 'HD', difficulty: 'Thử Thách Vinh Dự' },
      { id: 'imv_CWYbCk0', title: 'Thử Thách Vinh Dự Boss 123 Tuần 2', thumbnail: 'https://img.youtube.com/vi/imv_CWYbCk0/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=imv_CWYbCk0', duration: 'HD', difficulty: 'Thử Thách Vinh Dự' },
      { id: 'lOKcY15XNhY', title: 'Thử Thách Vinh Dự Boss 123 Tuần 3', thumbnail: 'https://img.youtube.com/vi/lOKcY15XNhY/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=lOKcY15XNhY', duration: 'HD', difficulty: 'Thử Thách Vinh Dự' },
      { id: 'iqN_BTp1E5A', title: 'Thử Thách Vinh Dự Boss 456 Tuần 1', thumbnail: 'https://img.youtube.com/vi/iqN_BTp1E5A/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=iqN_BTp1E5A', duration: 'HD', difficulty: 'Thử Thách Vinh Dự' },
      { id: 'v7ysRc2sw9I', title: 'Thử Thách Vinh Dự Boss 456 Tuần 2', thumbnail: 'https://img.youtube.com/vi/v7ysRc2sw9I/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=v7ysRc2sw9I', duration: 'HD', difficulty: 'Thử Thách Vinh Dự' },
      { id: 'E2p6rDAtIeM', title: 'Thử Thách Vinh Dự Boss 456 Tuần 3', thumbnail: 'https://img.youtube.com/vi/E2p6rDAtIeM/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=E2p6rDAtIeM', duration: 'HD', difficulty: 'Thử Thách Vinh Dự' },
      { id: '9Szdg9pbQD4', title: 'Thử Thách Sử Thi Boss 4', thumbnail: 'https://img.youtube.com/vi/9Szdg9pbQD4/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=9Szdg9pbQD4', duration: 'HD', difficulty: 'Thử Thách Sử Thi' },
      { id: 'h8m4g76Y1Bc', title: 'Thử Thách Sử Thi Boss 5', thumbnail: 'https://img.youtube.com/vi/h8m4g76Y1Bc/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=h8m4g76Y1Bc', duration: 'HD', difficulty: 'Thử Thách Sử Thi' },
      { id: 'WFK6c_BejjI', title: 'Thử Thách Sử Thi Boss 6', thumbnail: 'https://img.youtube.com/vi/WFK6c_BejjI/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=WFK6c_BejjI', duration: 'HD', difficulty: 'Thử Thách Sử Thi' }
    ]
  });

  for (let s = 5; s <= 12; s++) {
    seasons.push({ id: s, label: `Mùa ${s}`, videos: [] });
  }

  return seasons;
};

const dungeonData = generateMockData();

const getYouTubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const difficultyConfig: Record<string, { label: string; className: string }> = {
  'Thường': { label: 'Thường', className: 'bg-emerald-500/90 text-white' },
  'Anh Hùng': { label: 'Anh Hùng', className: 'bg-violet-600/90 text-white' },
  'Thử Thách Vinh Dự': { label: 'Vinh Dự', className: 'bg-sky-600/90 text-white' },
  'Thử Thách Sử Thi': { label: 'Sử Thi', className: 'bg-orange-600/90 text-white' },
  'Cực Khó': { label: 'Cực Khó', className: 'bg-red-600/90 text-white' },
};

export default function DungeonGuide({ type }: DungeonGuideProps) {
  const [activeSeason, setActiveSeason] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState<DungeonVideo | null>(null);
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  const handleVideoSelect = (video: DungeonVideo) => {
    setIsIframeLoading(true);
    setSelectedVideo(video);
  };

  const currentSeasonData = dungeonData.find(s => s.id === activeSeason);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-4 py-6 sm:px-6 sm:py-8 max-w-[1600px] mx-auto min-h-screen"
    >
      {/* Season tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {dungeonData.map((s) => (
            <motion.button
              key={s.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveSeason(s.id)}
              className={`px-4 py-2 text-sm font-bold rounded-xl transition-all duration-200 border cursor-pointer ${
                activeSeason === s.id ? 'bg-amber-500 text-white border-amber-400 shadow-md shadow-amber-500/20' : ''
              }`}
              style={activeSeason !== s.id ? { backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-2)' } : undefined}
              onMouseEnter={e => { if (activeSeason !== s.id) { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,158,11,0.4)'; (e.currentTarget as HTMLElement).style.color = '#f59e0b'; } }}
              onMouseLeave={e => { if (activeSeason !== s.id) { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-2)'; } }}
            >
              {s.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Videos grid */}
      <AnimatePresence mode="wait">
        {currentSeasonData && currentSeasonData.videos.length > 0 ? (
          <motion.div
            key={activeSeason}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {currentSeasonData.videos.map((video, index) => {
              const diff = difficultyConfig[video.difficulty] || { label: video.difficulty, className: 'bg-gray-600/90 text-white' };
              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.04, duration: 0.25 }}
                  className="group rounded-2xl overflow-hidden border hover:shadow-md transition-all duration-200 cursor-pointer"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,158,11,0.35)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
                  onClick={() => handleVideoSelect(video)}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden" style={{ backgroundColor: 'var(--bg-sunken)' }}>
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Difficulty badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] font-black px-2 py-1 rounded-lg backdrop-blur-sm ${diff.className}`}>
                        {diff.label}
                      </span>
                    </div>

                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center shadow-xl scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Play size={24} className="fill-white text-white ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="px-4 py-3">
                    <h3 className="font-bold text-sm leading-snug text-center transition-colors line-clamp-2" style={{ color: 'var(--text-1)' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#f59e0b'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-1)'}
                    >
                      {video.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key={`empty-${activeSeason}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-24 text-center"
          >
            <div className="text-4xl mb-3 opacity-20">🎬</div>
            <p className="text-gray-400 dark:text-gray-600 font-medium text-sm">
              Chưa có video cho mùa này.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 z-20 p-2 rounded-xl bg-black/50 hover:bg-black/70 text-white transition-all backdrop-blur-sm border border-white/10"
              >
                <X size={20} className="transition-transform hover:rotate-90 duration-200" />
              </button>

              <AnimatePresence>
                {isIframeLoading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gray-950"
                  >
                    <Loader2 className="w-10 h-10 text-amber-500 animate-spin mb-3" />
                    <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">
                      Đang tải video...
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo.url)}?autoplay=1&rel=0&modestbranding=1`}
                title={selectedVideo.title}
                className="w-full h-full relative z-0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsIframeLoading(false)}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
