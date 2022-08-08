import AppRouterOutlet from "./AppRouterOutlet";
import SharedNavMenu from "../../widgets/nav/menu/menu.component";

function AppComponent() {
  console.log('AppComponent');

  return (
    <div className="wrapper">
      <SharedNavMenu />
      <div id="content">
        <div className="d-flex">
          {/* <top-nav></top-nav> */}
          {/* <shared-nav-tabs className="bg-light"></shared-nav-tabs> */}
        </div>
        <AppRouterOutlet />
        {/* <router-outlet></router-outlet> */}
        {/* <app-chat-window className="chat"></app-chat-window> */}
      </div>
    </div>
  );
}
export default AppComponent;
