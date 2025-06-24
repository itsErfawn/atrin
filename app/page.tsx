import AtrinBlog from "@/components/Module/main/AtrinBlog/AtrinBlog";
import Bestproducts from "@/components/Module/main/Bestproducts/Bestproducts";
import CategoryProducts from "@/components/Module/main/CategoryProducts/CategoryProducts";
import LatestAtrinProducts from "@/components/Module/main/LatestAtrinProducts/LatestAtrinProducts";
import Mostpopularbrands from "@/components/Module/main/Mostpopularbrands/Mostpopularbrands";
import Specialauction from "@/components/Module/main/Specialauction/Specialauction";
import StoryList from "@/components/Module/main/StoryList/StoryList";
import VIPproducts from "@/components/Module/main/VIPproducts/VIPproducts";
import Womenclothing from "@/components/Module/main/Womenclothing/Womenclothing";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster position="top-center" />
      <StoryList />
      <VIPproducts />
      <CategoryProducts />
      <Mostpopularbrands />
      <LatestAtrinProducts />
      <Bestproducts />
      <AtrinBlog />
      <Womenclothing />
      <Specialauction />
    </>
  );
}
