export default function MenuLabel(props: { children: string }) {
  return (
    <span className="text-zinc-500 font-light px-6 py-2">
      {props.children}
    </span>
  );
}