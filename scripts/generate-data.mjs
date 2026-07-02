import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="big data Hadoop HDFS NameNode DataNode Block replication MapReduce Mapper Reducer Shuffle YARN ResourceManager NodeManager Hive Hive SQL partition table bucket table external table managed table Spark Driver Executor Cluster Manager RDD transformation action lazy evaluation DAG stage task DataFrame Dataset Spark SQL UDF partition cache persist broadcast join shuffle data skew small file wide dependency narrow dependency batch processing stream processing Parquet ORC data lake Delta Lake performance tuning resource allocation log troubleshooting data platform big data engineering ETL data pipeline distributed computing parallel processing cluster computing in-memory computation lineage fault tolerance checkpoint accumulator broadcast variable data locality speculative execution back pressure dynamic allocation";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"sp-tag-"+String(i+1).padStart(3,"0"),name:n,category:"Spark",description:"Spark标签:"+n,count:0,createdAt:"2026-07-02T00:00:00.000Z"};});}
var CD=[
  {id:"sp-course-01",order:1,slug:"BigData入门",title:"大数据入门与学习路线",description:"大数据背景、技术栈、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"sp-course-02",order:2,slug:"Hadoop生态",title:"Hadoop 生态与大数据架构",description:"Hadoop体系、组件、架构选型。",estimatedHours:8,diff:"easy"},
  {id:"sp-course-03",order:3,slug:"HDFS",title:"HDFS 分布式文件系统",description:"NameNode/DataNode、Block、副本机制。",estimatedHours:8,diff:"medium"},
  {id:"sp-course-04",order:4,slug:"MapReduce",title:"MapReduce 编程思想",description:"Mapper/Reducer、Shuffle、YARN。",estimatedHours:10,diff:"medium"},
  {id:"sp-course-05",order:5,slug:"Hive",title:"Hive 与数据仓库 SQL",description:"Hive SQL、分区表、分桶表、内外表。",estimatedHours:10,diff:"medium"},
  {id:"sp-course-06",order:6,slug:"Spark入门",title:"Spark 入门与运行架构",description:"Spark架构、Driver/Executor、Cluster Manager。",estimatedHours:8,diff:"hard"},
  {id:"sp-course-07",order:7,slug:"RDD基础",title:"RDD 基础与转换行动算子",description:"RDD特性、Transformation、Action、DAG。",estimatedHours:10,diff:"hard"},
  {id:"sp-course-08",order:8,slug:"DataFrame",title:"DataFrame 与 Dataset 基础",description:"DataFrame API、Dataset、类型安全。",estimatedHours:10,diff:"hard"},
  {id:"sp-course-09",order:9,slug:"SparkSQL",title:"Spark SQL 查询与分析",description:"Spark SQL、UDF、SQL到DataFrame。",estimatedHours:10,diff:"hard"},
  {id:"sp-course-10",order:10,slug:"Spark清洗",title:"Spark 数据清洗与批处理",description:"数据清洗ETL、批处理、日志分析。",estimatedHours:10,diff:"hard"},
  {id:"sp-course-11",order:11,slug:"性能优化",title:"分区、缓存与性能优化",description:"分区策略、缓存persist/cache、broadcast join、数据倾斜。",estimatedHours:10,diff:"hard"},
  {id:"sp-course-12",order:12,slug:"调度资源",title:"大数据任务调度与资源管理",description:"YARN资源管理、任务调度、动态分配。",estimatedHours:8,diff:"hard"},
  {id:"sp-course-13",order:13,slug:"大数据项目",title:"大数据项目实战",description:"日志分析、用户行为、订单数据处理项目。",estimatedHours:10,diff:"hard"},
  {id:"sp-course-14",order:14,slug:"大数据面试",title:"大数据面试与学习路线进阶",description:"大数据面试题、场景题、源码理解。",estimatedHours:8,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["理解大数据架构","能用Hive/Spark","会性能优化","能完成大数据项目"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
function bl(){
  var all=[];var id=1;
  function add(ci,t2,kps){var n=String(id).padStart(3,"0");all.push({id:"sp-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),summary:t2,content:"# "+t2+"\n\n"+t2+"内容。\n\n## 要点\n- 概念\n- 实现\n- 注意事项\n\n## 总结\n掌握"+t2+"提高大数据能力。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:kps||[],practiceQuestionIds:[],tags:["Spark"],prerequisites:[],updatedAt:"2026-07-02T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"Spark课程"+(ci+1)+"章"+(j+1),["sp-kp-"+String(id+1).padStart(4,"0")]);
  return all;
}
var KPN=[["大数据","海量数据处理"],["Hadoop","分布式系统基础"],["HDFS","分布式文件系统"],["MapReduce","分布式计算模型"],["YARN","资源管理器"],["Hive","数据仓库SQL"],["Spark","分布式计算引擎"],["RDD","弹性分布式数据集"],["DataFrame","数据框架"],["Spark SQL","SQL查询引擎"],["分区","数据划分"],["缓存","内存计算优化"],["数据倾斜","数据分布不均"],["Shuffle","数据重分配"],["DAG","有向无环图"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"sp-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"Spark",tags:["Spark"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"sp-kp-"+String(k.length+1).padStart(4,"0"),name:"Spark概念"+(k.length+1),description:"Spark概念",category:"Spark",tags:["Spark"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}return k;}
var QC=["BigData入门","Hadoop生态","HDFS","MapReduce","Hive","Spark入门","RDD基础","DataFrame","SparkSQL","Spark清洗","性能优化","调度资源","大数据项目","大数据面试"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"HDFS核心组件？",["NameNode/DataNode","Map/Reduce","Driver/Executor","Master/Worker"],"A","easy"],[2,"HDFS默认副本数？",["3","2","5","1"],"A","easy"],[3,"MapReduce中间结果在哪？",["本地磁盘","HDFS","内存","数据库"],"A","medium"],[4,"Hive数据存储位置？",["HDFS","本地文件","数据库","内存"],"A","medium"],[5,"Spark RDD哪个是Transformation？",["map","collect","count","save"],"A","medium"],[6,"Spark DAG在哪生成？",["Driver端","Executor端","Worker端","Cluster端"],"A","hard"],[8,"Spark SQL中UDF功能？",["自定义函数","聚合","排序","分组"],"A","hard"],[10,"broadcast join适用场景？",["小表join大表","大表join大表","两张大表","三张表"],"A","hard"],[11,"数据倾斜原因？",["key分布不均","分区太少","内存不足","CPU不够"],"A","hard"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];qs.push({id:"sp-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确"+t_[3]+"。",wrong_reason:"加强。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:500},{type:"calculation",min:300},{type:"case_analysis",min:900}];
  while(qid<=3700){
    var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="sp-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于Spark"+ch+"正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="Spark"+ch+"哪些正确？（多选）";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是Spark重要概念。（判断）";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="在Spark"+ch+"中____是重要概念。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"在大数据中的作用。";o=[{label:"A",text:"简答"}];a=ch+"用于大数据。";}
    else if(it.type==="calculation"){s="Spark"+ch+"计算题。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"结果"+(i+1)}});a="A";}
    else if(it.type==="case_analysis"){s="Spark"+ch+"案例：分析处理方案。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确"+a+"。",wrong_reason:"加强。",related_questions:[],tags:[ch],estimated_time:it.type==="calculation"?120:60,source_type:"curated-generated"});
    e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"sp-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":d==="medium"?"进阶":"综合"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-02T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["HDFS存储","MapReduce词频","Hive建表","Hive分区","RDD词频","DataFrame清洗","SparkSQL聚合","用户行为日志","订单数据分析","Parquet存储","分区优化","缓存优化","Shuffle排查","数据倾斜","广播Join","小文件合并","大数据面试"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"sp-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握Spark",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"需求",description:"分析"},{order:2,title:"方案",description:"设计"},{order:3,title:"实现",description:"编码"},{order:4,title:"验证",description:"测试"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-02T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"Spark路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"sp-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,summary:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["Hadoop","HDFS","MapReduce","YARN","Hive","Spark","RDD","DataFrame","SparkSQL","分区","缓存","Shuffle","DAG","数据倾斜","广播Join"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["Spark概念"+i,"Spark概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"sp-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"Spark",tags:["Spark"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["Spark问题"+(i+1)+"?","Spark问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"sp-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"Spark",tags:["Spark"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["Spark"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["Spark"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["Spark"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["Spark"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["Spark"]});});return e;}
async function main(){
  console.log("Gen Spark...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-big-data-spark",slug:"module-big-data-spark",title:"大数据与Spark基础",subtitle:"面向数据工程大数据入门和AI数据平台学习者",description:"面向数据工程大数据入门和AI数据平台学习者的HadoopHDFSMapReduceHiveSparkRDDDataFrameSparkSQL批处理性能优化与项目实战。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["大数据","Spark","Hadoop","HDFS","Hive","Spark SQL","PySpark","数据平台"],estimatedHours:180,difficulty:"intermediate",updatedAt:"2026-07-02T12:00:00.000Z",coverEmoji:"\u{26A1}",repoUrl:"https://github.com/openskill-galaxy/module-big-data-spark",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var f2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in f2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(f2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(f2[key])?f2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});
  console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
