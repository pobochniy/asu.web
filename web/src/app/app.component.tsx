import AppRouterOutlet from "./router-outlet.component";
import SharedNavMenu from "../shared/nav/menu/menu.component";

function AppComponent() {
  return (
    <div className="wrapper">
      <SharedNavMenu />
      <div id="content">
        <div className="d-flex">
          {/* <top-nav></top-nav> */}
          {/* <shared-nav-tabs class="bg-light"></shared-nav-tabs> */}
        </div>
        <AppRouterOutlet />
        {/* <router-outlet></router-outlet> */}
        {/* <app-chat-window class="chat"></app-chat-window> */}
      </div>
    </div>
  );
}
export default AppComponent;
