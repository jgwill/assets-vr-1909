# assets-vr-1909
* ASsets VR presented on #WPApp

## GULP Pipeline Automation

### Request Modeling
```js
var req = new Object();
req  = {
  seqNs: "x__raining__191109__03__Rigging_take2",
  author: "Guillaume Descoteaux-Isabelle",
  dtx: "19-11-12",
  sshAuth:"root@py",
  remotePath:"/gi/wp-content/uploads/sites/assets-vr-1909",
  postSuccessCommand:"chmod -R 777 ."
}; 

```
### Response Modeling
```js
var res = new Object(); //@result Response model
res = {
  success:true,
  message:"VR Sequence x__raining__191109__03__Rigging_take2 was comitted and push and a new post was created at : http://guillaumeisabelle.com/nad-previz/2019/11/12/assets-vr-1909-x__raining__191109__03__rigging_take2/",
  vrPostUrl:"http://guillaumeisabelle.com/nad-previz/2019/11/12/assets-vr-1909-x__raining__191109__03__rigging_take2/"};
```
### Bash current command
```sh

git add x__raining__191109__03__Rigging_take2/ &&  git commit x__raining__191109__03__Rigging_take2/ -m "x__raining__191109__03__Rigging_take2
Experimentation of Particle networking - result are rain drop, splashing and sliding streams.  by Guillaume Descoteaux-Isabelle 19-11-12
http://guillaumeisabelle.com/nad-previz/2019/11/12/assets-vr-1909-x__raining__191109__03__rigging_take2/" && git push ; ssh root@py "cd /gi/wp-content/uploads/sites/assets-vr-1909&& git pull"
```

## WPApp Blocks
* here are some blocks element

|       |       |       |       |       |
|  ---  |  ---  |  ---  |  ---  |  ---  |
|       |       |   VR360 Shortcode block sample    |       |       |
|       |       |      |   [spin360 canvas_name="x__raining__191109__03__Rigging_take2" imgs_folder="x__raining__191109__03__Rigging_take2/" imgs_nbr=72 aspect_ratio=1.778 speed=1]     |       |
|       |       |       |       |       |
|       |       |       |       |       |
|       |       |       |       |       |


# References and Resources
|       |       |       |       |       |
|  ---  |  ---  |  ---  |  ---  |  ---  |
|       |       |   Diagramming project    |   http://guillaumeisabelle.com/r/stcgoal/diagramming    |       |
|       |       |       |       |       |
|       |       |       |       |       |
|       |       |       |       |       |
|       |       |       |       |       |

