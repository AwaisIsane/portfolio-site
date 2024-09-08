import LayoutHeaderComponent from "../components/LayoutHeaderComponent";

export default function LayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutHeaderComponent navSection="Blogs">{children}</LayoutHeaderComponent>
  );
}
