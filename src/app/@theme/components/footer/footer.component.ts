import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created by <b><a href="https://github.com/luanfromsouthside" target="_blank">LuanHenry</a></b> 2021
    </span>
    <div class="socials">
      <a href="https://github.com/luanfromsouthside" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/thanhluan.vo.31392/" target="_blank" class="ion ion-social-facebook"></a>
    </div>
  `,
})
export class FooterComponent {
}
