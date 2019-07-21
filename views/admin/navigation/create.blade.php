@extends('admin.layouts.master')

@section('title') {{ MyHelpers::admin_trans('create_navigation') }} @endsection

@section('content')

  <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1> {{ MyHelpers::admin_trans('create_navigation') }}</h1>
        <ol class="breadcrumb">
            <li><a href="{{ route('admin.dashboard') }}"><i class="fa fa-dashboard"></i> {{ MyHelpers::admin_trans('dashboard') }}</a></li>
            <li><a href="{{ route('admin.navigation.index') }}"> {{ MyHelpers::admin_trans('all_navigation') }} </a></li>
            <li class="active">{{ MyHelpers::admin_trans('create_navigation') }}</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">
        <!-- Small boxes (Stat box) -->
        <div class="row">
            <div class="col-md-12">
              <div class="box">
                <!-- /.box-header -->
                <div class="box-body">
                    <p class="alert alert-block alert-danger message_box hide alert-dismissible"></p>
                    <form class="form-horizontal" id="create-form" enctype="multipart/form-data">
                     
                      <div class="form-group">
                        <label for="name" class="col-sm-2 control-label">{{ MyHelpers::admin_trans('name') }} <i class="has-error">*</i></label>
                        <div class="col-sm-6">
                          <input type="text" class="form-control" name="name" placeholder="{{ MyHelpers::admin_trans('name') }}" value="">
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="en_name" class="col-sm-2 control-label">{{ MyHelpers::admin_trans('en_name') }} <i class="has-error">*</i></label>
                        <div class="col-sm-6">
                          <input type="text" class="form-control" name="en_name" placeholder="{{ MyHelpers::admin_trans('en_name') }}" value="">
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="action_path" class="col-sm-2 control-label">{{ MyHelpers::admin_trans('action_path') }} <i class="has-error">*</i></label>
                        <div class="col-sm-6">
                          <input type="text" class="form-control" name="action_path" placeholder="{{ MyHelpers::admin_trans('action_path') }}" value="">
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="icon" class="col-sm-2 control-label">{{ MyHelpers::admin_trans('icon') }}</label>
                        <div class="col-sm-6">
                          <input type="text" class="form-control" name="icon" placeholder="{{ MyHelpers::admin_trans('icon') }}" value="">
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="display_order" class="col-sm-2 control-label">{{ MyHelpers::admin_trans('display_order') }} <i class="has-error">*</i></label>
                        <div class="col-sm-6">
                          <input type="text" class="form-control" name="display_order" placeholder="{{ MyHelpers::admin_trans('display_order') }}" value="">
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="parent_id" class="col-sm-2 control-label">{{ MyHelpers::admin_trans('parent_id') }} <i class="has-error">*</i></label>

                        <div class="col-sm-6">
                            <select class="form-control" name="parent_id">
                              <option value="0">No Parent</option>
                              @if(count($navigations))
                                @foreach($navigations as $key => $navigation)
                                  <option value="{{ $navigation->id }}">{{ $navigation->en_name }}</option>
                                @endforeach
                              @endif
                            </select>
                        </div>
                      </div>
                      
                      <div class="form-group">
                        <label for="show_in_menu" class="col-sm-2 control-label">{{ MyHelpers::admin_trans('show_in_menu') }} <i class="has-error">*</i></label>
                        <div class="col-sm-6">
                            <select class="form-control" name="show_in_menu">
                              @foreach(config('cms.other_action') as $key => $status)
                                <option value="{{ $key }}">{{ $status }}</option>
                              @endforeach
                            </select>
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="show_in_permission" class="col-sm-2 control-label">{{ MyHelpers::admin_trans('show_in_permission') }} <i class="has-error">*</i></label>
                        <div class="col-sm-6">
                            <select class="form-control" name="show_in_permission">
                              @foreach(config('cms.other_action') as $key => $status)
                                <option value="{{ $key }}">{{ $status }}</option>
                              @endforeach
                            </select>
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="child_permission" class="col-sm-2 control-label">{{ MyHelpers::admin_trans('child_permission') }} <i class="has-error">*</i></label>
                        <div class="col-sm-6">
                            <select class="form-control" name="child_permission">
                              @foreach(config('cms.other_action') as $key => $status)
                                <option value="{{ $key }}">{{ $status }}</option>
                              @endforeach
                            </select>
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="status" class="col-sm-2 control-label">{{ MyHelpers::admin_trans('status') }} <i class="has-error">*</i></label>
                        <div class="col-sm-6">
                            <select class="form-control" name="status">
                              @foreach(config('cms.action_status') as $key => $status)
                                <option value="{{ $key }}">{{ $status }}</option>
                              @endforeach
                            </select>
                        </div>
                      </div>
                      <input type="hidden" name="_token" value="{{ Session::token() }}">

                      <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-6">
                          <button type="button" class="btn btn-success" id="createBtn">{{ MyHelpers::admin_trans('create') }}</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
        </div>
        <!-- /.row -->
    </section>
    <!-- /.content -->
@endsection


@section('scripts')

<script type="text/javascript">
    jQuery(function($) {
      $(document).on('click','#createBtn',function(e){
            e.preventDefault();
            $.ajax({
                url: "{{ route('admin.navigation.create') }}",
                data: $('#create-form').serialize(),
                dataType: 'json',
                type: 'POST',
                beforeSend: function()
                {
                    $('#createBtn').attr('disabled',true);
                    $('.message_box').html('').removeClass('alert-success').addClass('hide alert-danger');
                },
                error: function(jqXHR, exception){
                    $('#createBtn').attr('disabled',false);
                    
                    var msg = formatErrorMessage(jqXHR, exception);
                    $('.message_box').html(msg).removeClass('hide');
                },
                success: function (data)
                {
                    $('#createBtn').attr('disabled',false);
                    if(data.status == 1)
                    {
                        $('.message_box').html(data.msg).removeClass('hide alert-danger').addClass('alert-success');
                        window.location.replace('{{ route("admin.navigation.index")}}');

                    } else {
                        var message = formatErrorMessageFromJSON(data.errors);
                        $('.message_box').html(message).removeClass('hide');
                    }
                    
                }
            });
        });
    });
</script>

@endsection