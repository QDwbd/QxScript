function getGoneDay(n=0,yearFlag=true){let myDate=new Date();myDate.setDate(myDate.getDate()-n);let month=myDate.getMonth()+1;let day=myDate.getDate();let result=""+(yearFlag?myDate.getFullYear():"")+"/"+(month<10?"0"+month:month)+"/"+(day<10?"0"+day:day);return result}let timeDate=(Date.parse(new Date(getGoneDay(-365)))/1000).toFixed(0).toString();var obj=JSON.parse($response.body.replace(/\"is_vip\":\"\w+\"/g,'"is_vip":1'));let requestUrl=$request.url;if(/^https:\/\/litebhapi\.belugabh\.com\/personal_center\/user_equity_status_list?/.test(requestUrl)){obj.data.current_month_poi_can_use_times=timeDate;obj.data.ai_site_selection_recommend_times=timeDate;obj.data.eight_palaces_permissions_times="9999";obj.data.is_vip=true;obj.data.vip_in_use_status="3";obj.data.role_20=6666;obj.data.role_15=8888;obj.data.survey_export_times=7777;obj.data.survey_export_old_app_pay_times=5555;obj.data.current_month_pdf_can_use_times="4444";obj.data.basic_report_limit_seconds_remaining="3333";obj.data.crowd_portraits_remaining_times=2222}else if(/^https:\/\/litebhapi\.belugabh\.com\/personal_center\/user_info?/.test(requestUrl)){obj.data.is_member=true}else if(/^https:\/\/litebhapi\.belugabh\.com\/personal_center\/my_homepage?/.test(requestUrl)){obj.data.following_counts="99999";obj.data.follower_counts="88888";obj.data.likes_counts="77777"}else if(/^https:\/\/litebhapi\.belugabh\.com\/market_survey_report\/periphery?/.test(requestUrl)){obj.data.lock=false}$done({body:JSON.stringify(obj)});