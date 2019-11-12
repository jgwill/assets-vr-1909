/*
 */
//@STCGoal Automated publication of my rendering into a VR asset for Web app consumption -> Self/collaborator Analysis
/*
git add x__raining__191109__03__Rigging_take2/ &&\
git commit x__raining__191109__03__Rigging_take2/ \
-m "x__raining__191109__03__Rigging_take2
Experimentation of Particle networking - result are rain drop, splashing and sliding streams.  by Guillaume Descoteaux-Isabelle 19-11-12
http://guillaumeisabelle.com/nad-previz/2019/11/12/assets-vr-1909-x__raining__191109__03__rigging_take2/" \
&& git push \
&& ssh root@py "cd /gi/wp-content/uploads/sites/assets-vr-1909&& git pull && chmod -R 777 ."
*/
//@STCIssue I am exporting a jpeg sequence of my render into this repo and steps to have a post created are taking unacceptable amount of time / amount of operations
var req = new Object();
req  = {
  seqNs: "x__raining__191109__03__Rigging_take2",
  author: "Guillaume Descoteaux-Isabelle",
  dtx: "19-11-12",
  sshAuth:"root@py",
  remotePath:"/gi/wp-content/uploads/sites/assets-vr-1909",
  postSuccessCommand:"chmod -R 777 ."
}; 
//### Response Modeling
var res = new Object(); //@result Response model
res = {
  success:true,
  message:"VR Sequence x__raining__191109__03__Rigging_take2 was comitted and push and a new post was created at : http://guillaumeisabelle.com/nad-previz/2019/11/12/assets-vr-1909-x__raining__191109__03__rigging_take2/",
  vrPostUrl:"http://guillaumeisabelle.com/nad-previz/2019/11/12/assets-vr-1909-x__raining__191109__03__rigging_take2/"};