import{bB as s}from"./index.5df27305.js";const r="Backup",i="Restore",n="Start backup",a="Finish backup",d="[ {{item}} ] Backup was successful",c="[ {{item}} ] Backup failed",l="No file selected",_="Start restore",p="Finish restore",u="[ {{item}} ] Restore was successful",h="[ {{item}} ] Restore failed",m="Override",f={backup:r,restore:i,start_backup:n,finish_backup:a,success_backup_item:d,failed_backup_item:c,no_file:l,start_restore:_,finish_restore:p,success_restore_item:u,failed_restore_item:h,override:m},g={paths:"Paths"},y={internal_upload:"Internal upload",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload",refresh_token:"Refresh token",root_folder_id:"Root folder id"},b={client_id:"Client id","client_id-tips":"Keep it empty if you don't have one",client_secret:"Client secret","client_secret-tips":"Keep it empty if you don't have one",internal_upload:"Internal upload","internal_upload-tips":"If you are using Aliyun ECS is located in Beijing, you can turn it on to boost the upload speed",oauth_token_url:"Oauth token url",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},refresh_token:"Refresh token",remove_way:"Remove way",remove_ways:{delete:"Delete",trash:"Trash"},root_folder_id:"Root folder id"},k={order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},refresh_token:"Refresh token",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd"},w={client_id:"Client id",client_secret:"Client secret",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},v={album_id:"Album id",client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",show_type:"Show type",show_types:{root:"Root",root_only_album:"Root only album",root_only_file:"Root only file"}},S={BDUSS:"BDUSS",pwd:"Pwd",root_folder_path:"Root folder path",surl:"Surl"},P={address:"Address",cookie:"Cookie",password:"Password",root_folder_path:"Root folder path",username:"Username"},C={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username"},x={chunk_size:"Chunk size","chunk_size-tips":"chunk size while uploading (unit: MB)",client_id:"Client id",client_secret:"Client secret",order_by:"Order by","order_by-tips":"such as: folder,name,modifiedTime",order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_id:"Root folder id"},A={client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",root_folder_id:"Root folder id",show_archive:"Show archive"},R={baseUrl:"BaseUrl","baseUrl-tips":"basic URL for file operation",cookie:"Cookie","cookie-tips":"about 15 days valid, ignore if shareUrl is used",repair_file_info:"Repair file info","repair_file_info-tips":"To use webdav, you need to enable it",root_folder_id:"Root folder id",shareUrl:"ShareUrl","shareUrl-tips":"used to get the sharing page",share_password:"Share password",type:"Type",types:{cookie:"Cookie",url:"Url"}},T={mkdir_perm:"Mkdir perm",root_folder_path:"Root folder path",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files",thumb_cache_folder:"Thumb cache folder",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail"},U={access_token:"Access token",order_by:"Order by",order_bys:{size:"Size",title:"Title",updated_at:"Updated at"},order_desc:"Order desc",project_id:"Project id",root_folder_id:"Root folder id"},D={email:"Email",password:"Password"},z={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",is_sharepoint:"Is sharepoint",redirect_uri:"Redirect uri",refresh_token:"Refresh token",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",site_id:"Site id"},O={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",email:"Email",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",tenant_id:"Tenant id"},F={password:"Password",root_folder_id:"Root folder id",username:"Username"},L={password:"Password",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd",username:"Username"},B={cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},M={access_key_id:"Access key id",bucket:"Bucket",custom_host:"Custom host",endpoint:"Endpoint",force_path_style:"Force path style",list_object_version:"List object version",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"Placeholder",region:"Region",remove_bucket:"Remove bucket","remove_bucket-tips":"Remove bucket name from path when using custom host.",root_folder_path:"Root folder path",secret_access_key:"Secret access key",sign_url_expire:"Sign url expire"},j={address:"Address",password:"Password",private_key:"Private key",root_folder_path:"Root folder path",username:"Username"},N={address:"Address",password:"Password",root_folder_path:"Root folder path",share_name:"Share name",username:"Username"},E={address:"Address",password:"Password",repoId:"RepoId",root_folder_path:"Root folder path",username:"Username"},I={cookie:"Cookie",order_by:"Order by",order_bys:{created:"Created",fileName:"FileName",fileSize:"FileSize",updated:"Updated"},order_direction:"Order direction",order_directions:{Asc:"Asc",Desc:"Desc"},project_id:"Project id",region:"Region",regions:{china:"China",international:"International"},root_folder_id:"Root folder id",use_s3_upload_method:"Use s3 upload method"},q={cookie:"Cookie",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_path:"Root folder path"},V={captcha_token:"Captcha token",password:"Password",root_folder_id:"Root folder id",username:"Username"},G={algorithms:"Algorithms","algorithms-tips":"sign type is algorithms,this is required",captcha_sign:"Captcha sign","captcha_sign-tips":"sign type is captcha_sign,this is required",captcha_token:"Captcha token",client_id:"Client id",client_secret:"Client secret",client_version:"Client version",device_id:"Device id",download_user_agent:"Download user agent",login_type:"Login type",login_types:{refresh_token:"Refresh token",user:"User"},package_name:"Package name",password:"Password","password-tips":"login type is user,this is required",refresh_token:"Refresh token","refresh_token-tips":"login type is refresh_token,this is required",root_folder_id:"Root folder id",sign_type:"Sign type",sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},timestamp:"Timestamp","timestamp-tips":"sign type is captcha_sign,this is required",use_video_url:"Use video url",user_agent:"User agent",username:"Username","username-tips":"login type is user,this is required"},Y={AUSHELLPORTAL:"AUSHELLPORTAL",apikey:"Apikey",root_folder_id:"Root folder id"},Q={bucket:"Bucket",endpoint:"Endpoint",operator_name:"Operator name",operator_password:"Operator password",root_folder_path:"Root folder path",sign_url_expire:"Sign url expire"},W={head_size:"Head size","head_size-tips":"Use head method to get file size, but it may be failed.",url_structure:"Url structure","url_structure-tips":`structure:FolderName:
  [FileName:][FileSize:][Modified:]Url`},H={max_file_size:"Max file size",min_file_size:"Min file size",num_file:"Num file",num_folder:"Num folder",root_folder_path:"Root folder path"},$={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username",vendor:"Vendor",vendors:{other:"Other",sharepoint:"Sharepoint"}},K={client_id:"Client id",client_secret:"Client secret",order_by:"Order by",order_bys:{created:"Created",modified:"Modified",name:"Name",path:"Path",size:"Size"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},J={"115 Cloud":{},"123Pan":{},"139Yun":{},"189Cloud":{alert:"You can try to use 189PC driver if this driver does not work."},"189CloudPC":{},"AList V2":{},"AList V3":{},Alias:{},Aliyundrive:{alert:`There may be an infinite loop bug in this driver.
Deprecated, no longer maintained and will be removed in a future version.
We recommend using the official driver AliyundriveOpen.`},AliyundriveOpen:{},AliyundriveShare:{},BaiduNetdisk:{},BaiduPhoto:{},BaiduShare:{},Cloudreve:{},FTP:{},GoogleDrive:{},GooglePhoto:{},"IPFS API":{},Lanzou:{},Local:{},MediaTrack:{},Mega_nz:{},Onedrive:{},OnedriveAPP:{},PikPak:{},PikPakShare:{},Quark:{},S3:{},SFTP:{},SMB:{},Seafile:{},Teambition:{},Terabox:{},Thunder:{},ThunderExpert:{},Trainbit:{},USS:{},UrlTree:{},Virtual:{},WebDav:{},YandexDisk:{}},X={"115 Cloud":"115 Cloud","123Pan":"123Pan","139Yun":"139Yun","189Cloud":"189Cloud","189CloudPC":"189CloudPC","AList V2":"AList V2","AList V3":"AList V3",Alias:"Alias",Aliyundrive:"Aliyundrive",AliyundriveOpen:"AliyundriveOpen",AliyundriveShare:"AliyundriveShare",BaiduNetdisk:"BaiduNetdisk",BaiduPhoto:"BaiduPhoto",BaiduShare:"BaiduShare",Cloudreve:"Cloudreve",FTP:"FTP",GoogleDrive:"GoogleDrive",GooglePhoto:"GooglePhoto","IPFS API":"IPFS API",Lanzou:"Lanzou",Local:"Local",MediaTrack:"MediaTrack",Mega_nz:"Mega nz",Onedrive:"Onedrive",OnedriveAPP:"OnedriveAPP",PikPak:"PikPak",PikPakShare:"PikPakShare",Quark:"Quark",S3:"S3",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambition",Terabox:"Terabox",Thunder:"Thunder",ThunderExpert:"ThunderExpert",Trainbit:"Trainbit",USS:"USS",UrlTree:"UrlTree",Virtual:"Virtual",WebDav:"WebDav",YandexDisk:"YandexDisk"},Z={"115 Cloud":{cookie:"Cookie","cookie-tips":"one of QR code token and cookie required",page_size:"Page size","page_size-tips":"list api per page size of 115 driver",qrcode_token:"Qrcode token","qrcode_token-tips":"one of QR code token and cookie required",root_folder_id:"Root folder id"},"123Pan":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",root_folder_id:"Root folder id",stream_upload:"Stream upload",username:"Username"},"139Yun":{account:"Account",cloud_id:"Cloud id",cookie:"Cookie",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"}},"189Cloud":{cookie:"Cookie","cookie-tips":"Fill in the cookie if need captcha",password:"Password",root_folder_id:"Root folder id",username:"Username"},"189CloudPC":{family_id:"Family id",no_use_ocr:"No use ocr",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",rapid_upload:"Rapid upload",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"},username:"Username",validate_code:"Validate code"},"AList V2":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},"AList V3":{meta_password:"Meta password",password:"Password",root_folder_path:"Root folder path",token:"Token",url:"Url",username:"Username"},Alias:g,Aliyundrive:y,AliyundriveOpen:b,AliyundriveShare:k,BaiduNetdisk:w,BaiduPhoto:v,BaiduShare:S,Cloudreve:P,FTP:C,GoogleDrive:x,GooglePhoto:A,"IPFS API":{endpoint:"Endpoint",gateway:"Gateway",root_folder_path:"Root folder path"},Lanzou:R,Local:T,MediaTrack:U,Mega_nz:D,Onedrive:z,OnedriveAPP:O,PikPak:F,PikPakShare:L,Quark:B,S3:M,SFTP:j,SMB:N,Seafile:E,Teambition:I,Terabox:q,Thunder:V,ThunderExpert:G,Trainbit:Y,USS:Q,UrlTree:W,Virtual:H,WebDav:$,YandexDisk:K,config:J,drivers:X},ee="Refresh",oe="Add",te="Edit",se="Save",re="Update",ie="Copied",ne="Deleted successfully",ae="Saved successfully",de="Updated successfully",ce="Choose",le="Confirm",_e="Cancel",pe="Are you sure you want to delete [{{name}}]?",ue="Operations",he="Yes",me="No",fe="Clear",ge="Select folder",ye="Select folder or input path",be="Disable",ke="Enable",we="OK",ve="Back",Se="Have an account?",Pe="Go to login",Ce="Close",xe="Not currently supported",Ae="Please enter",Re={refresh:ee,add:oe,edit:te,delete:"Delete",save:se,update:re,copied:ie,delete_success:ne,save_success:ae,update_success:de,choose:ce,confirm:le,cancel:_e,delete_confirm:pe,operations:ue,yes:he,no:me,clear:fe,choose_folder:ge,choose_or_input_path:ye,disable:be,enable:ke,ok:we,back:ve,have_account:Se,go_login:Pe,close:Ce,no_support_now:xe,empty_input:Ae},Te={name:"Name",size:"Size",modified:"Modified"},Ue={download:"Download",failed_load_img:"Failed to load image",open_with:"Open with ...",install:"Install",installing:"Installing","tr-install":"TrollStore","tr-installing":"TrollStore Installing"},De={list:"List View",grid:"Grid View",image:"Image View"},ze="No images in the current folder",Oe="Load more",Fe="No more",Le="Please input password",Be={more:"More",refresh:"Refresh",toggle_theme:"Toggle Theme",switch_lang:"Switch Language",toggle_checkbox:"Toggle Checkbox",rename:"Rename",input_new_name:"Input new name","only_one-tips":"Only one object can be selected to rename",move:"Move",copy:"Copy",choose_dst_folder:"Select destination folder",delete:"Delete","delete-tips":"Are you sure to delete the selected object?",copy_link:"Copy link",preview_page:"Preview page",down_link:"Download link",encode_down_link:"Encode download link",mkdir:"New Folder",input_dir_name:"Input folder name",new_file:"New File",input_filename:"Input filename",cancel_select:"Cancel Select",offline_download:"Offline download","offline_download-tips":"One URL per line",download:"Download",batch_download:"Batch Download",package_download:"Package Download",package_download_disabled:"Package download is disabled",send_aria2:"Send to Aria2",aria2_not_set:"Please set aria2 rpc url",send_aria2_success:"Send to aria2 successfully","pre_package_download-tips":"Using streamsaver in the browser instead of the server for package download requires the corresponding storage to support cors, and the unsupported storage will fail.","package_download-tips":"Downloading, please wait don't close the page",upload:"Upload",local_settings:"Local Settings",recursive_move:"Recursive Move","recursive_move_directory-tips":"Are you sure you want to move all files in the current folder and its subfolders to the specified folder?",remove_empty_directory:"Remove Empty Folder","remove_empty_directory-tips":"Are you sure to delete all its empty subfolders?",regex_rename:"Regex Rename",regex_rename_preview:"Changed Files",regex_rename_preview_old_name:"Old Name",regex_rename_preview_new_name:"New Name",regular_rename:"Regular expression file renaming. Input the source file name regular expression on the first line, and input the new file name regular expression on the second line."},Me={add_as_task:"Add as task","upload-tips":"Drag files here to upload, or click:",release:"Release to upload",no_files_drag:"No files were dragged in.",upload_files:"Choose Files",upload_folder:"Choose Folder",pending:"Pending",uploading:"Uploading",backending:"Uploading in the backend",success:"Success",error:"Error",back:"Back to Upload",clear_done:"Clear Done"},je={aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC secret",aria2_dir:"Aria2 download directory"},Ne={current_status:"Current Status",initializing:"Initializing",fetching_struct:"Fetching folder structure",fetching_struct_failed:"Failed to fetch folder structure",downloading:"Downloading files, don't close or refresh the page",failed:"Failed to package download",success:"Download completed"},Ee={powered_by:"Powered by AList",manage:"Manage"},Ie={search:"Search",no_result:"No result yet"},qe="Failed fetching settings: ",Ve="Failed get current user: ",Ge={obj:Te,preview:Ue,layouts:De,no_images:ze,load_more:Oe,no_more:Fe,input_password:Le,toolbar:Be,upload:Me,local_settings:je,package_download:Ne,footer:Ee,search:Ie,fetching_settings_failed:qe,get_current_user_failed:Ve,"Loading storage, please wait":"Loading storage, please wait"},Ye="Search index",Qe="Current indexes",We="Build indexes",He="Rebuild indexes",$e="Paths to update",Ke="Max depth",Je="Update indexes",Xe="Object count",Ze="Last done time",eo="Unknown",oo="Stop",to="Clear",so="Error",ro={search_index:Ye,current:Qe,build:We,rebuild:He,paths_to_update:$e,max_depth:Ke,update:Je,obj_count:Xe,last_done_time:Ze,unknown:eo,stop:oo,clear:to,error:so},io="Login to the",no="Remember me",ao="Forget password?",co="https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",lo="Clear",_o="Login",po="Browse as a guest",uo="Login successfully",ho={login_to:io,"username-tips":"Input your username","password-tips":"Input your password","otp-tips":"Input your OTP Code",remember:no,forget:ao,forget_url:co,clear:lo,login:_o,use_guest:po,success:uo},mo={dashboard:"Dashboard",settings:"Settings",site:"Site",style:"Style",preview:"Preview",global:"Global",other:"Other",users:"Users",storages:"Storages",metas:"Metas",profile:"Profile",about:"About",tasks:"Tasks",aria2:"Aria2",upload:"Upload",copy:"Copy","backup-restore":"Backup & Restore",home:"Home",indexes:"Indexes",sso:"Single Sign-on",qbit:"qBittorrent",docs:"Documentation"},fo="AList Manage",go="You are not admin user, please login with admin account.",yo="Logout successfully",bo="Send",ko="Receive",wo="Received messages",vo={sidemenu:mo,title:fo,not_admin:go,logout_success:yo,send:bo,receive:ko,received_msgs:wo,"add_storage-tips":"You may need to fill in some information in the newly opened tab.","messenger-tips":"You may need to fill in some information on this tab as prompted."},So="Path",Po="Password",Co="Write",xo="Hide",Ao="Readme",Ro="Apply to sub folder",To="One regular expression per line",Uo="Support markdown content or markdown link",Do={path:So,password:Po,write:Co,hide:xo,readme:Ao,apply_sub:Ro,hide_help:To,readme_help:Uo},zo="Allow indexed",Oo="Allow mounted",Fo="Announcement",Lo="Aria2 secret",Bo="Aria2 uri",Mo="Audio autoplay",jo="Audio cover",No="Audio types",Eo="Auto update index",Io="Customize body",qo="Customize head",Vo="Default page size",Go="External previews",Yo="Favicon",Qo="Filename char mapping",Wo="Forward direct link params",Ho="Hide files",$o="Home container",Ko={hope_container:"Hope container",max_980px:"Max 980px"},Jo="Home icon",Xo="Iframe previews",Zo="Ignore paths",et="Image types",ot="Index progress",tt="Link expiration",st="Logo",rt="Main color",it="Max index depth",nt="Ocr api",at="Package download",dt="Pagination type",ct={all:"All",auto_load_more:"Auto load more",load_more:"Load more",pagination:"Pagination"},lt="Privacy regs",_t="Proxy ignore headers",pt="Proxy types",ut="Qbittorrent seedtime",ht="Qbittorrent url",mt="Robots txt",ft="Search index",gt={bleve:"Bleve",database:"Database",database_non_full_text:"Database non full text",none:"None"},yt="Settings layout",bt={list:"List",responsive:"Responsive"},kt="Sign all",wt="Site title",vt="Sso application name",St="Sso client id",Pt="Sso client secret",Ct="Sso endpoint name",xt="Sso jwt public key",At="Sso login enabled",Rt="Sso login platform",Tt={Casdoor:"Casdoor",Dingtalk:"Dingtalk",Github:"Github",Google:"Google",Microsoft:"Microsoft"},Ut="Sso organization name",Dt="Text types",zt="Token",Ot="Version",Ft="Video autoplay",Lt="Video types",Bt={allow_indexed:zo,allow_mounted:Oo,announcement:Fo,aria2_secret:Lo,aria2_uri:Bo,audio_autoplay:Mo,audio_cover:jo,audio_types:No,auto_update_index:Eo,customize_body:Io,customize_head:qo,default_page_size:Vo,external_previews:Go,favicon:Yo,filename_char_mapping:Qo,forward_direct_link_params:Wo,hide_files:Ho,home_container:$o,home_containers:Ko,home_icon:Jo,iframe_previews:Xo,ignore_paths:Zo,"ignore_paths-tips":"one path per line",image_types:et,index_progress:ot,link_expiration:tt,logo:st,main_color:rt,max_index_depth:it,"max_index_depth-tips":"max depth of index",ocr_api:nt,package_download:at,pagination_type:dt,pagination_types:ct,privacy_regs:lt,proxy_ignore_headers:_t,proxy_types:pt,qbittorrent_seedtime:ut,qbittorrent_url:ht,robots_txt:mt,search_index:ft,search_indexs:gt,settings_layout:yt,settings_layouts:bt,sign_all:kt,site_title:wt,sso_application_name:vt,sso_client_id:St,sso_client_secret:Pt,sso_endpoint_name:Ct,sso_jwt_public_key:xt,sso_login_enabled:At,sso_login_platform:Rt,sso_login_platforms:Tt,sso_organization_name:Ut,text_types:Dt,token:zt,version:Ot,video_autoplay:Ft,video_types:Lt},Mt="Aria2",jt="Aria2 Version:",Nt="Set aria2",Et="Copy Token",It="Reset Token",qt="Reset Token Successfully",Vt="Unknown type",Gt="Set qBittorrent",Yt="qBittorrent",Qt={aria2:Mt,aria2_version:jt,set_aria2:Nt,copy_token:Et,reset_token:It,reset_token_success:qt,unknown_type:Vt,set_qbit:Gt,qbittorrent:Yt},Wt={mount_path:"Mount Path","mount_path-tips":"The path you want to mount to, it is unique and cannot be repeated",driver:"Driver",order:"Order","order-tips":"Use to sort",status:"Status",remark:"Remark",cache_expiration:"Cache Expiration","cache_expiration-tips":"The cache expiration time for this storage(minutes)",down_proxy_url:"Download proxy URL",web_proxy:"Web proxy",webdav_policy:"WebDAV policy",webdav_policys:{"302_redirect":"302 redirect",use_proxy_url:"use proxy URL",native_proxy:"native proxy"},order_by:"Order by",order_bys:{name:"Name",size:"Size",modified:"Modified"},order_direction:"Order direction",order_directions:{asc:"Ascending",desc:"Descending"},extract_folder:"Extract folder",extract_folders:{front:"Extract to front",back:"Extract to back"},enable_sign:"Enable sign"},Ht={start_load_success:"Start loading",load_all:"Reload All",filter_by_driver:"Filter by driver"},$t={common:Wt,other:Ht},Kt="Download file to local machine",Jt="Transfer downloaded file to corresponding storage",Xt="Download file to local machine",Zt="Transfer downloaded file to corresponding storage",es="Upload file to corresponding storage",os="Copy file from a storage to another storage",ts="Completed",ss="Running",rs="Pending",is="Running",ns="Canceling",as="Succeeded",ds="Canceled",cs="Errored",ls="Clear Succeeded",_s="Retry",ps={aria2_down:Kt,aria2_transfer:Jt,qbit_down:Xt,qbit_transfer:Zt,upload:es,copy:os,done:ts,undone:ss,pending:rs,running:is,canceling:ns,succeeded:as,canceled:ds,errored:cs,clear_succeeded:ls,retry:_s},us={see_hides:"Can see hides",access_without_password:"Access without password",offline_download:"Add offline download tasks",write:"Make dir or upload",rename:"Rename",move:"Move",copy:"Copy",delete:"Delete",webdav_read:"Webdav read",webdav_manage:"Webdav manage"},hs="Username",ms="Password",fs="Base path",gs="Role",ys="Permission",bs="Disabled",ks="Available",ws="Update Profile",vs="Update profile successfully, please re-login.",Ss="Change Username",Ps="Change Password",Cs="Enable 2FA",xs="Cancel 2FA",As="Cancel 2FA successfully",Rs="Scan the QR code to save the secret key",Ts="Input the code of your 2FA app",Us="Verify",Ds="So you cannot modify anything in the manage page.",zs="Single sign-on Login",Os="Connect Single sign-on Platform",Fs="Disconnect Single sign-on Platform",Ls={permissions:us,username:hs,password:ms,base_path:fs,role:gs,permission:ys,disabled:bs,available:ks,update_profile:ws,update_profile_success:vs,change_username:Ss,change_password:Ps,"change_password-tips":"Keep the password empty if you don't want to change it",enable_2fa:Cs,cancel_2fa:xs,cancel_2fa_success:As,"2fa_already_enabled":"2FA is already enabled",scan_qr:Rs,input_code:Ts,verify:Us,"guest-tips":"You are currently visiting as a guest.",modify_nothing:Ds,sso_login:zs,connect_sso:Os,disconnect_sso:Fs},o=Object.assign({"./br.json":f,"./drivers.json":Z,"./global.json":Re,"./home.json":Ge,"./index.json":s,"./indexes.json":ro,"./login.json":ho,"./manage.json":vo,"./metas.json":Do,"./settings.json":Bt,"./settings_other.json":Qt,"./storages.json":$t,"./tasks.json":ps,"./users.json":Ls}),Bs={};for(const e in o){const t=e.split("/")[1].split(".")[0];Bs[t]=o[e]}export{Bs as default};
