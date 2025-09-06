export default function FakeGlassSurface({ children, className, ...props }) {
  return (
    <div 
      className={`backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}