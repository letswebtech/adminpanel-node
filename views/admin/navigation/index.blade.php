@extends('admin.layouts.master')

@section('title') {{ MyHelpers::admin_trans('all_navigation') }} @endsection

@section('content')

	<!-- Content Header (Page header) -->
        <section class="content-header">
            <h1> {{ MyHelpers::admin_trans('all_navigation') }} </h1>
            <ol class="breadcrumb">
                <li><a href="{{ route('admin.dashboard') }}"><i class="fa fa-dashboard"></i> {{ MyHelpers::admin_trans('dashboard') }}</a></li>
                <li class="active">{{ MyHelpers::admin_trans('all_navigation') }}</li>
            </ol>
        </section>

        <!-- Main content -->
        <section class="content">
            @include('admin.includes.info-box')
            <p>
                <a href="{{ route('admin.navigation.create') }}" class="btn btn-success">{{ MyHelpers::admin_trans('create_navigation') }}</a>
            </p>
            <div class="row">
                <div class="col-md-12">
				    <div class="box">
				        <div class="box-body">
				            <table class="table table-striped table-bordered table-hover dataTable" id="navigation-table">
				                <thead>
					                <tr>
                                        <th>{{ MyHelpers::admin_trans('id') }}</th>
                                        <th>{{ MyHelpers::admin_trans('name') }}</th>
					                    <th>{{ MyHelpers::admin_trans('en_name') }}</th>
					                    <th>{{ MyHelpers::admin_trans('icon') }}</th>
                                        <th>{{ MyHelpers::admin_trans('parent_id') }}</th>
                                        <th>{{ MyHelpers::admin_trans('action_path') }}</th>
                                        <th>{{ MyHelpers::admin_trans('status') }}</th>
                                        <th>{{ MyHelpers::admin_trans('show_in_menu') }}</th>
                                        <th>{{ MyHelpers::admin_trans('show_in_permission') }}</th>
                                        <th>{{ MyHelpers::admin_trans('child_permission') }}</th>
					                    <th>{{ MyHelpers::admin_trans('display_order') }}</th>
					                    <th>{{ MyHelpers::admin_trans('action') }}</th>
					                </tr>
				                </thead>
				                <tbody>
				                </tbody>
				            </table>
				        </div>
				    </div>
				    <!-- /.box -->
				</div>
                <!-- ./col -->
            </div>
            <!-- /.row -->
        </section>
        <!-- /.content -->
@endsection

@section('scripts')
<script type="text/javascript">
	$(function() {
        $('#navigation-table').DataTable({
            processing: true,
            serverSide: true,
            ajax: '{{ route("admin.navigation.list") }}',
            columns : [
                { "data": "id"},
                { "data": "name"},
	            { "data": "en_name" },
	            { "data": "icon" },
                { "data": "parent_id" },
                { "data": "action_path" },
                { "data": "status" },
                { "data": "show_in_menu" },
                { "data": "show_in_permission" },
                { "data": "child_permission" },
	            { "data": "display_order" },
                {
                    "mRender": function (data, type, row) 
                    {
                        return '<a href="{{ URL::to("admin/navigation/update") }}/'+row.id+'">\
                            <i class="fa fa-edit fa-fw"></i>\
                        </a>';
                    }, orderable: false
                }
	        ],
            order : [[0, 'desc']]
        });
    });

</script>
@endsection