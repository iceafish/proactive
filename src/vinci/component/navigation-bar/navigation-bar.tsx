import './index.css';

import { Component, ReactNode } from 'react';

import {
  CopyOutlined,
  DownloadOutlined,
  EditOutlined,
  ExpandOutlined,
  MenuOutlined,
  MonitorOutlined,
  MoreOutlined,
  PlayCircleOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import { IconButton } from './icon-button';

export interface NavigationBarProps {}

export class NavigationBar extends Component<NavigationBarProps> {
  override render(): ReactNode {
    return (
      <div className="navbar-main">
        <div className="nav-left">
          <IconButton icon={<DownloadOutlined />} />
          <IconButton icon={<DownloadOutlined />} />
          <IconButton icon={<MonitorOutlined />} />
          <IconButton icon={<MoreOutlined />} />
        </div>
        <div className="nav-center">
          <IconButton icon={<CopyOutlined />} />
          <IconButton icon={<EditOutlined />} />
          <IconButton icon={<MenuOutlined />} />
        </div>
        <div className="nav-right">
          <IconButton icon={<PlayCircleOutlined />} />
          <IconButton icon={<ExpandOutlined />} />
          <IconButton icon={<ReloadOutlined />} />
        </div>
      </div>
    );
  }
}
