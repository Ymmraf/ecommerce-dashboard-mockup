export function NextButton(props: any) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, width: "50px", background: "green", borderRadius:"100%" }}
      onClick={onClick}
    />
  );
}

export function PrevButton(props: any) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", borderRadius:"100%" }}
      onClick={onClick}
    />
  );
}
