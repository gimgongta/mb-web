type TextComponentProps = {
  text: string;
  style?: React.CSSProperties;
};

export default function TextComponent({ text, style }: TextComponentProps) {
  return <div style={style}>{text}</div>;
}
