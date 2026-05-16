type Props = {
  id: string;
  title: string;
  description: string;
};

export function SectionTitle({ id, title, description }: Props) {
  return (
    <div id={id} className="section-title">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
