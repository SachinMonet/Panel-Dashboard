import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule, LayoutDashboard, Users, FolderKanban, Activity,
  FileText, Settings,
  TrendingUp,
  CircleAlert,
  CircleCheckBig,
  Search,
  Plus,
  SquarePen,
  EllipsisVertical,
  Clock,
  CircleX,
  Pause,
  Play,
  RefreshCw,
  TrendingDown,
  TriangleAlert
} from 'lucide-angular';


@NgModule({
  declarations: [],
  imports: [
    LucideAngularModule.pick({
      LayoutDashboard,
      Users,
      FolderKanban,
      Activity,
      FileText,
      Settings,
      TrendingUp,
      CircleAlert,
      CircleCheckBig,
      Search,
      Plus,
      SquarePen,
      EllipsisVertical,
      Clock,
      CircleX,
      Pause,
      Play,
      RefreshCw,
      TrendingDown,
      TriangleAlert
    }),
    CommonModule,

  ]
})
export class LucideModule { }
