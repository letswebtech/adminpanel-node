<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta charset="utf-8" />
        <link rel="icon" type="image/x-icon" href="{{ URL::to('frontend/images/favicon.png') }}" />
        <title>{{ MyHelpers::admin_trans('admin_app_name') }} - @yield('title')</title>

        <meta name="description" content="{{ config('app.name') }} - @yield('title')" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Tell the browser to be responsive to screen width -->
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <!-- Bootstrap 3.3.6 -->
        <link rel="stylesheet" href="{{ URL::to('backend/bootstrap/css/bootstrap.min.css') }}">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="{{ URL::to('backend/plugins/font-awesome-4.7.0/css/font-awesome.min.css') }}">
        <!-- Ionicons -->
        <link rel="stylesheet" href="{{ URL::to('backend/plugins/ionicons-2.0.1/css/ionicons.min.css') }}">
        <!-- DataTables -->
        <link rel="stylesheet" href="{{ URL::to('backend/plugins/datatables/dataTables.bootstrap.css') }}">
        <!-- Theme style -->
        <link rel="stylesheet" href="{{ URL::to('backend/dist/css/AdminLTE.min.css') }}">
        <!-- AdminLTE Skins. Choose a skin from the css/skins
           folder instead of downloading all of them to reduce the load. -->
        <link rel="stylesheet" href="{{ URL::to('backend/dist/css/skins/_all-skins.min.css') }}">
        <!-- iCheck -->
        <link rel="stylesheet" href="{{ URL::to('backend/plugins/iCheck/flat/blue.css') }}">
        <!-- Morris chart -->
        <link rel="stylesheet" href="{{ URL::to('backend/plugins/morris/morris.css') }}">
        <!-- jvectormap -->
        <link rel="stylesheet" href="{{ URL::to('backend/plugins/jvectormap/jquery-jvectormap-1.2.2.css') }}">
        <!-- Date Picker -->
        <link rel="stylesheet" href="{{ URL::to('backend/plugins/datepicker/datepicker3.css') }}">
        <!-- Daterange picker -->
        <link rel="stylesheet" href="{{ URL::to('backend/plugins/daterangepicker/daterangepicker.css') }}">
         <!-- Datetime picker -->
         <link rel="stylesheet" href="{{ URL::to('backend/plugins/datetimepicker/bootstrap-datetimepicker.css') }}">
        <!-- Bootstrap time Picker -->
        <link rel="stylesheet" href="{{ URL::to('backend/plugins/timepicker/bootstrap-timepicker.min.css') }}">

        <!-- Bootstrap Datetime Picker -->
        <link rel="stylesheet" href="{{ URL::to('backend/plugins/datetimepicker/bootstrap-datetimepicker.min.css') }}">

        <!-- Select2 -->
        <link rel="stylesheet" href="{{ URL::to('backend/plugins/select2/select2.min.css') }}">

        <!-- bootstrap wysihtml5 - text editor -->
        <link rel="stylesheet" href="{{ URL::to('backend/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css') }}">
        <link rel="stylesheet" href="{{ URL::to('backend/css/site.css') }}">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
       
        @yield('styles')

    </head>

    <body class="hold-transition skin-blue sidebar-mini">
        <div class="wrapper">
        <!-- Header Container Start -->
        @include('admin.includes.header')
        
        <!-- Header Container End -->
        <!-- Left side column. contains the logo and sidebar -->
        @include('admin.includes.leftmenu')


        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            @yield('content')
        </div>
        <!-- /.content-wrapper -->

        @include('admin.includes.footer')

        <script type="text/javascript">
            var baseUrl = "{{ URL::to('/') }}";
        </script>

        <!-- basic scripts -->

        <!-- jQuery 2.2.3 -->
        <script src="{{ URL::to('backend/plugins/jQuery/jquery-2.2.3.min.js') }}"></script>
        <!-- jQuery UI 1.11.4 -->
        <script src="{{ URL::to('backend/plugins/jQueryUI/jquery-ui.min.js') }}"></script>
        <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
        <script>
            $.widget.bridge('uibutton', $.ui.button);
        </script>
        <!-- Bootstrap 3.3.6 -->
        <script src="{{ URL::to('backend/bootstrap/js/bootstrap.min.js') }}"></script>
        <!-- DataTables -->
        <script src="{{ URL::to('backend/plugins/datatables/jquery.dataTables.min.js') }}"></script>
        <script src="{{ URL::to('backend/plugins/datatables/dataTables.bootstrap.min.js') }}"></script>
       
        <!-- Sparkline -->
        <script src="{{ URL::to('backend/plugins/sparkline/jquery.sparkline.min.js') }}"></script>
        <!-- jvectormap -->
        <script src="{{ URL::to('backend/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js') }}"></script>
        <script src="{{ URL::to('backend/plugins/jvectormap/jquery-jvectormap-world-mill-en.js') }}"></script>
        <!-- jQuery Knob Chart -->
        <script src="{{ URL::to('backend/plugins/knob/jquery.knob.js') }}"></script>
        <!-- daterangepicker -->
        <script src="{{ URL::to('backend/plugins/daterangepicker/moment.min.js') }}"></script>
        <script src="{{ URL::to('backend/plugins/daterangepicker/daterangepicker.js') }}"></script>
        <script src="{{ URL::to('backend/plugins/daterangepicker/combodate.js') }}"></script>
        <!-- datepicker -->
        <script src="{{ URL::to('backend/plugins/datepicker/bootstrap-datepicker.js') }}"></script>
        <!-- datetimepicker -->
        <script src="{{ URL::to('backend/plugins/datetimepicker/bootstrap-datetimepicker.js') }}"></script>
        <!-- bootstrap time picker -->
        <script src="{{ URL::to('backend/plugins/timepicker/bootstrap-timepicker.min.js') }}"></script>
        <!-- bootstrap datetime picker -->
        <script src="{{ URL::to('backend/plugins/datetimepicker/bootstrap-datetimepicker.min.js') }}"></script>


        <!-- Bootstrap WYSIHTML5 -->
        <script src="{{ URL::to('backend/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js') }}"></script>
        <!-- Slimscroll -->
        <script src="{{ URL::to('backend/plugins/slimScroll/jquery.slimscroll.min.js') }}"></script>
        <!-- FastClick -->
        <script src="{{ URL::to('backend/plugins/fastclick/fastclick.js') }}"></script>
        <!-- CK Editor -->
        <script src="{{ URL::to('backend/plugins/ckeditor/ckeditor.js') }}"></script>

        <!-- Chart JS -->
        <script src="{{ URL::to('backend/plugins/chartjs/Chart.min.js') }}"></script>

        <!-- Select2 -->
        <script src="{{ URL::to('backend/plugins/select2/select2.full.min.js') }}"></script>
        
        <!-- Google Map -->
        <script src="http://maps.google.com/maps/api/js?libraries=places&key={{ config('cms.google_map_api_key') }}"></script>

        <!-- AdminLTE App -->
        <script src="{{ URL::to('backend/dist/js/app.min.js') }}"></script>
        <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
        <script src="{{ URL::to('backend/js/main.js') }}"></script>
        <div id="remote_model" class="modal fade" data-backdrop="static">
            <div class="modal-dialog">
                <div class="modal-content"></div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div>
        
        <script type="text/javascript">
            $('#detail-container').on('click', 'li a', function(e){
                var table = $(this).data('table');
                $(this).data('table','');
                if(table)
                {
                $('#'+table).DataTable().draw();
                }
            });
            
            $(document).on('click', 'a[data-toggle="modal"]', function (e) {
                e.preventDefault();
                e.stopPropagation();
                var target_element = $(this).data('target');
                $(target_element).find('.modal-content').html('<div class="modal-body">\
                        <div class="row">\
                        <div class="col-md-12 center">\
                                <i class="fa fa-spinner fa-spin fa-lg blue"></i> {{ MyHelpers::admin_trans("please_wait_this_will_take_few_moments") }}..\
                            </div>\
                        </div>\
                    </div>\
                </div>');
            });
            
            $('#remote_model').on('hidden.bs.modal', function (e) {
                $(this).removeData();
                $(this).find('.modal-content').empty();
            });
            $('#remote_model').on('show.bs.modal', function (e) {
                // $(this).removeData();
                // $(this).removeData('modal');
                // $(this).empty();
            });
        </script>
        @yield('scripts')

    </body>
</html>