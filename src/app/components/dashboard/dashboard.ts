import { Component } from '@angular/core';
import { LucideModule } from '../../lucide/lucide-module';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [LucideModule, LucideAngularModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  statCards: StatCard[] = [
    { icon: 'folder-kanban', value: '24', label: 'Active Campaigns', meta: '+3 this week', color: 'blue' },
    { icon: 'users', value: '12', label: 'Panel Providers', meta: '2 pending approval', color: 'purple' },
    { icon: 'trending-up', value: '45,231', label: 'Total Respondents', meta: '+12% this month', color: 'green' },
    { icon: 'circle-alert', value: '3', label: 'Active Issues', meta: 'Needs attention', color: 'red' }
  ];

  campaigns: Campaign[] = [
    { title: 'Consumer Behavior Study Q1', code: 'C-2024-089', status: 'active', completes: '750 / 1000 completes', percent: 75 },
    { title: 'Product Satisfaction Survey', code: 'C-2024-090', status: 'active', completes: '225 / 500 completes', percent: 45 },
    { title: 'Brand Awareness Research', code: 'C-2024-091', status: 'paused', completes: '240 / 800 completes', percent: 30 },
    { title: 'Market Segmentation Analysis', code: 'C-2024-092', status: 'active', completes: '1080 / 1200 completes', percent: 90 }
  ];

  providers: ProviderPerf[] = [
    { name: 'Provider A', completes: '2450 completes', quality: '94% quality', avgCpi: '$3.50' },
    { name: 'Provider B', completes: '1890 completes', quality: '89% quality', avgCpi: '$2.80' },
    { name: 'Provider C', completes: '1650 completes', quality: '97% quality', avgCpi: '$4.20' },
    { name: 'Provider D', completes: '1420 completes', quality: '91% quality', avgCpi: '$3.10' }
  ];
  

}


interface StatCard {
  icon: string;
  value: string;
  label: string;
  meta: string;
  color: 'blue' | 'purple' | 'green' | 'red';
}

interface Campaign {
  title: string;
  code: string;
  status: 'active' | 'paused';
  completes: string;
  percent: number;
}

interface ProviderPerf {
  name: string;
  completes: string;
  quality: string;
  avgCpi: string;
}