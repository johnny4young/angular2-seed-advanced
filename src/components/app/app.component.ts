// angular
import {ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

// app
import {NameListService} from '../../frameworks/app.framework/index';
import {AnalyticsService} from '../../frameworks/analytics.framework/index';
import {RouteComponent, PlatformDirective} from '../../frameworks/core.framework/index';
import {LangSwitcherComponent} from '../../frameworks/i18n.framework/index';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';

@RouteComponent({
  selector: 'sd-app',
  viewProviders: [NameListService],
  templateUrl: './components/app/app.component.html',
  directives: [LangSwitcherComponent, NavbarComponent, ToolbarComponent, PlatformDirective],
  changeDetection: ChangeDetectionStrategy.Default // Everything else uses OnPush
})
@RouteConfig([
  { path: '/', component: HomeComponent, as: 'Home' },
  { path: '/about', component: AboutComponent, as: 'About' }
])
export class AppComponent {
  constructor(public analytics: AnalyticsService) {

  }
}
