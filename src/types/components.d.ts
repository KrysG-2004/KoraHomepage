// 为 JSX 组件提供类型声明
declare module '../blocks/Backgrounds/Orb/Orb.jsx' {
  interface OrbProps {
    hue?: number;
    hoverIntensity?: number;
    rotateOnHover?: boolean;
    forceHoverState?: boolean;
  }
  
  const Orb: React.FC<OrbProps>;
  export default Orb;
}

declare module '../blocks/TextAnimations/CircularText/CircularText.jsx' {
  interface CircularTextProps {
    text: string;
    spinDuration?: number;
    onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers' | null;
    className?: string;
  }
  
  const CircularText: React.FC<CircularTextProps>;
  export default CircularText;
} 