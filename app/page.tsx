import AtrinBlog from "@/components/module/main/AtrinBlog";
import Bestproducts from "@/components/module/main/Bestproducts";
import CategoryProducts from "@/components/module/main/CategoryProducts";
import LatestAtrinProducts from "@/components/module/main/LatestAtrinProducts";
import Mostpopularbrands from "@/components/module/main/Mostpopularbrands";
import Specialauction from "@/components/module/main/Specialauction";
import StoryList from "@/components/module/main/StoryList";
import VIPproducts from "@/components/module/main/VIPproducts";
import Womenclothing from "@/components/module/main/Womenclothing";

export default function Home() {
  return (
    <>
      <StoryList />
      <Bestproducts />
      <AtrinBlog />
      <LatestAtrinProducts />
      <VIPproducts />
      <Mostpopularbrands />
      <CategoryProducts />
      <Womenclothing />
      <Specialauction />
    </>
  );
}
