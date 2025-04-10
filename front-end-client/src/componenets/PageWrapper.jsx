import Sidebar from "./SideBar";

const PageWrapper = ({ children }) => {
  return (
    <div className="flex">
     
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default PageWrapper;
