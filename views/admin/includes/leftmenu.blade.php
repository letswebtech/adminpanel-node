{{! $user = Auth::guard('admin')->user() }}
{{! $userMenuList = Session::get('userMenuList') }}
<?php $fieldname = $user->locale == 'en' ? 'en_name' : 'name'; ?>
 <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu">
            <li class="header">{{ MyHelpers::admin_trans('main_navigation') }}</li>
            @if( isset($userMenuList[0]) && count($userMenuList[0]))
                @foreach($userMenuList[0] as $key => $navigation)
                    @if($navigation['show_in_menu'] == 1)
                        @if(isset($userMenuList[$key]) && count($userMenuList[$key]))
                            <li class="treeview">
                                <a href="{{ $navigation['action_path'] }}">
                                    <i class="{{ $navigation['icon'] }}"></i> 
                                    <span>{{ $navigation[$fieldname] }}</span>
                                    <span class="pull-right-container">
                                        <i class="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>

                                @if(isset($userMenuList[$key]) && count($userMenuList[$key]))
                                    <ul class="treeview-menu">
                                        @foreach($userMenuList[$key] as $submenu)
                                            @if($submenu['show_in_menu'] == 1)
                                                <li {{ Request::is($submenu['action_path']) ? 'class=active' : '' }}><a href="{{ URL::to($submenu['action_path']) }}"><i class="fa fa-circle-o"></i>{{ $submenu[$fieldname] }}</a></li>
                                            @endif
                                        @endforeach
                                    </ul>
                                @endif
                            </li>
                        @else
                            <li {{ Request::is("{$navigation['action_path']}*") ? 'class=active' : '' }}>
                                <a href="{{ URL::to($navigation['action_path']) }}">
                                    <i class="{{ $navigation['icon'] }}"></i> 
                                    <span>{{ $navigation[$fieldname] }}</span>
                                </a>
                            </li>
                        @endif
                    @endif
                    
                @endforeach
            @endif
        </ul>
    </section>
    <!-- /.sidebar -->
</aside>