import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideModule } from '../../lucide/lucide-module';
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { Login } from '../login';

@Component({
  selector: 'app-providers',
  imports: [CommonModule, LucideModule, LucideAngularModule,FormsModule],
  templateUrl: './providers.html',
  styleUrl: './providers.scss',
})
export class Providers {
  searchFilterBykey: any;
  addButton = {
    icon: 'plus',
    label: 'Add Provider'
  };

  filters = {
    searchPlaceholder: 'Search providers...',
    statusOptions: ['All Status', 'Active', 'Pending', 'Inactive']
  };

  providers: ProviderRow[] = [
    {
      name: 'Provider A',
      code: 'PVDR_A',
      status: 'active',
      statusIcon: 'circle-check-big',
      activeCampaigns: 8,
      totalCompletes: '12,450',
      quality: '94%',
      qualityDot: true,
      avgCpi: '$3.50'
    },
    {
      name: 'Provider B',
      code: 'PVDR_B',
      status: 'active',
      statusIcon: 'circle-check-big',
      activeCampaigns: 6,
      totalCompletes: '8,920',
      quality: '89%',
      qualityDot: false,
      avgCpi: '$2.80'
    },
    {
      name: 'Provider C',
      code: 'PVDR_C',
      status: 'pending',
      statusIcon: 'clock',
      activeCampaigns: 0,
      totalCompletes: '0',
      quality: '0%',
      qualityDot: false,
      avgCpi: '$0.00'
    },
    {
      name: 'Provider D',
      code: 'PVDR_D',
      status: 'active',
      statusIcon: 'circle-check-big',
      activeCampaigns: 5,
      totalCompletes: '6,780',
      quality: '91%',
      qualityDot: true,
      avgCpi: '$3.10'
    },
    {
      name: 'Provider E',
      code: 'PVDR_E',
      status: 'inactive',
      statusIcon: 'circle-x',
      activeCampaigns: 0,
      totalCompletes: '4,560',
      quality: '85%',
      qualityDot: false,
      avgCpi: '$2.90'
    }
  ];

  actionIcons = ['square-pen', 'EllipsisVertical'] as const;
filteredRows: any
  constructor(private login: Login) {
    this.filteredRows = this.providers
  }

  getStatusBadgeClass(status: ProviderRow['status']): string {
    if (status === 'active') return 'badge badge--green';
    if (status === 'pending') return 'badge badge--yellow';
    return 'badge badge--gray';
  }

  getStatusIconClass(status: ProviderRow['status']): string {
    if (status === 'active') return 'icon-status icon-status--green';
    if (status === 'pending') return 'icon-status icon-status--yellow';
    return 'icon-status icon-status--gray';
  }

  searchFilter(event: any) {
 //console.log(this.searchFilterBykey);
  this.filteredRows = this.login.filterBySearch(this.providers, this.searchFilterBykey);
}



}



interface ProviderRow {
  name: string;
  code: string;
  status: 'active' | 'pending' | 'inactive';
  statusIcon: string;
  activeCampaigns: number;
  totalCompletes: string;
  quality: string;
  qualityDot: boolean;
  avgCpi: string;
}
