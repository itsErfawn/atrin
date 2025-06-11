import AtrinBlog from "@/components/Module/main/AtrinBlog";
import Bestproducts from "@/components/Module/main/Bestproducts";
import CategoryProducts from "@/components/Module/main/CategoryProducts";
import LatestAtrinProducts from "@/components/Module/main/LatestAtrinProducts";
import Mostpopularbrands from "@/components/Module/main/Mostpopularbrands";
import Specialauction from "@/components/Module/main/Specialauction";
import Story from "@/components/Module/main/Story";
import StoryList from "@/components/Module/main/StoryList";
import VIPproducts from "@/components/Module/main/VIPproducts";
import Womenclothing from "@/components/Module/main/Womenclothing";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4">
      <StoryList />
      <Bestproducts />
      <AtrinBlog />
      <LatestAtrinProducts />
      <VIPproducts />
      <Mostpopularbrands />
      <CategoryProducts />
      <Womenclothing />
      <Specialauction />
    </div>
  );
}
