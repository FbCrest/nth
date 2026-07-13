/**
 * FontPreloader: render invisible text dùng tất cả custom fonts ngay khi app mount.
 * Trick này force browser download font files trước khi user navigate đến bất kỳ trang nào,
 * tránh FOUT (Flash of Unstyled Text) ở các trang con.
 */
export default function FontPreloader() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden',
        opacity: 0,
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      <span style={{ fontFamily: 'FzGameBr' }}>preload</span>
      <span style={{ fontFamily: 'FZSSKSJ' }}>预载</span>
    </div>
  );
}
