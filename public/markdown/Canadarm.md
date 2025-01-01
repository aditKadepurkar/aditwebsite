---
title: Canadarm IK-RRT
date: 2024-12-30
author: Adit Kadepurkar, Thomas Weber, Kuba Kedzior
post_id: 3
---

## Background
When I refer to Canadarm in this blog I am generally referring to the Canadarm2. If you are not familiar with the Canadarm, it is a robot on the International Space Station(ISS) that is used to complete tasks outside in space such as capturing/docking cargo, assembling and maintaining the ISS, and supporting astronauts during spacewalks.
![Canadarm on ISS](/blogs/canadarm_picture_1.jpg)
The most interesting aspect of the Canadarm is the fact that it can traverse the exterior of the ISS using various "latches". These latches are places where an end effector can attach to, providing power and communication to the arms system, and making the end effector into the base. In this way, the Canadarm always has one of its two end effectors attached to a latch, acting as a base, and the other end effector acting normally as an end effector.

This idea was fascinating to our group and we decided to consider how this could be applicable on a larger scale in some future space-like setting. We created a relatively large environment that was a sort of space structure in our minds(I wanted to call it a dyson cube, but my group members did not like that. Luckily this is my blog so nobody can stop me!). Anyways, we made a dyson cube and spawned a bunch of latches along every which side. For visual clarity we made the latches quite easy to see.
![Dyson cube](/blogs/canadarm_picture_2.png)
The latches are the gray knobs jutting out of the dyson cube structure(extends beyond the picture) and the gray Canadarm mesh is also visible with one latch attached to the starting node. You might be able to spy a red cube in the bottom left. That is our goal!

The goal of the system here was simply to build a predefined structure using objects(the red cubes!) found in the environment. The higher level idea here was that, in the case of some immediate damage to the structure, the Canadarm could traverse to a location where there are materials and quickly bring them back to patch any damage. There are of course a lot of simplifications in this process, but it is a very useful skill to have for these robots.

For our purposes we made the task to simply build a tower out of ten red blocks, randomly spawned around the structure(with constraints to ensure there is a latch point that makes it possible to reach the block).

## Technical Details
The amount of depth I go into here will vary based on how involved I was with each aspect of the project, but I will try my best to give a good overview of what we did and found.

### Task and IK-RRT
Our task has already been layed out in the previous section, but here I will talk about some smaller technical things we implemented to make the task more realistic, as well as talking about some of the aspects that are missing.

1. We wrote a logic script that makes sure the robot places the blocks sequentially from the ground up. This is just a script that starts from a node(normally the base of the structure being built) and creates a dependancy graph which is used to ensures all the prerequisite blocks have been placed before placing a particular block. This just makes sure that no blocks are floating and makes it more reasonable.
2. For the back traversal we wrote a script that randomly tries to find a valid location to drop the block off and iteratively searches for a valid position. This will be discussed in more detail later in the State Machine section.
3. Blocks are spawned randomly around the simulation and by default do not move. This is of course not completely realistic, even in space, but made the most sense for the purposes of our project.
4. There is a camera movement script to allow the camera to smoothly follow the robot's end effector. Because the end effector is constantly switching, we added a simple smoothing effect so it doesn't clip.

Inverse kinematics is a problem that requires an input end effector pose. In our case the pose would be represented as a vector of (x, y, z, roll, pitch, yaw).
![Inverse Kinematics](/blogs/canadarm_picture_3.png)
Our system however only contains a point(the location of the block) and we don't have any particular roll, pitch, yaw to grasp at. To work this constraint, we use the algorithm of IK-RRT[1] I will briefly describe the IK-RRT algorithm(I assume you have an understanding of IK and RRT, if you need to read more see here: [IK](https://en.wikipedia.org/wiki/Inverse_kinematics), [RRT](https://en.wikipedia.org/wiki/Rapidly_exploring_random_tree))

IK-RRT is a variation of the RRT algorithm that incorporates inverse kinematics during the tree expansion phase. The key innovation is that instead of randomly sampling configurations in joint space, IK-RRT samples end effector poses and uses IK solutions as tree nodes.

The algorithm works by:
1. Randomly sampling a pose near the goal position
2. Finding an IK solution for that pose
3. Adding the solution to the RRT tree if valid
4. Repeating until a path to the goal is found

This approach is particularly effective for reaching specific positions in space, as it focuses the search around poses that could potentially grasp the target object. For our Canadarm implementation, this means we can efficiently find paths that position the end effector at appropriate grasping poses for the blocks. The paper showcases methods with IK via Jacobian Transpose and can be expanded to Pseudoinverse(those familiar with IK will know that these are the most common IK implementations.) The algorithm was that 90% of the time regular RRT would run, and 10% of the time IK would run. We evaluated Ik-RRT with a Jacobian Transpose backbone, Pseudoinverse backbone, and one that randomly chose between the two IK methods.
![Results](/blogs/canadarm_picture_4.png)
We evaluated on raw number of iterations taken to complete the task. Each example was randomized, but we had the benefit of collecting a large number of data points to even that out. We used box and whisker plots to show how each IK-RRT method performed. The results showed that Pseudoinverse performs the worst, with Jacobian Transpose performing slightly better. Interestingly, our own concoction outperformed the other two algorithms by randomly choosing between the two IK methods(still only running IK 10% of the time).


### State Machine
The state machine for this project was quite interesting to design. The astute reader might have realized by now that since the Canadarm must always have an end effector attached to a latch point, bringing a block somewhere will be quite a difficult process indeed. Here is a video that shows part of the forward process:
<video src="/blogs/canadarm_visual_5.mp4" controls />

A couple of key points to note to understand the visualization:
- The green box highlights show the goal of the IK-RRT for each planning step
- The blue particles represent the Jacobian Transpose IK nodes
- The purple particles represent the pseudoinverse IK nodes
- The yellow particles represent the regular RRT nodes
- There is a limit on how many nodes are shown visually to the user so that your machine does not crash(this has happened) so there may be paths made from nodes you as the user could not see.
- Once a path is found, all particles except for the path chosen are removed, with said path highlighted in red

You may have noticed in our video the solution we have for the problem with bringing the block back. Our solution is best captured in our state machine diagram seen below:
![State Machine](/blogs/canadarm_picture_6.png)

It is somewhat complex, but also quite intuitive. It is just a larger loop with two inner loops, one that performs that motion towards the block and one that performs the motion back. The action of finding a valid position for the block on the way back is also an interesting problem that makes use of a random heuristic that retries till there are no collisions. It works very well in practice, however scuffed the methodology is.

The method for taking the block back is the only way to bring the block back while ensuring one of the end effectors of Canadarm is always connected to the space structure, though it would be interesting to create a model with a third or even fourth arm that could do this task more efficiently, not letting go of objects and picking up multiple objects in a single go!

<!-- talk a bit more about the state machine and incorporate the block selection/path that happens offline and is not shown in the state machine -->
The way the path planning algorithm works is that there is a graph made of all the latches and BFS is used to calculate the best method to reach the block the same path is followed backwards. 


## Shortcomings
There are various things that were simplified in this project that should be clarified here:
1. The red blocks that are used in this task are just randomly floating around in space with zero velocity relative to the structure
2. There is no actual grasping action, the blocks just have to come close enough to the end effector and they are grasped
3. The blocks are clipped to positions(when placing blocks to goal) so that the end result looks cleaner
4. Obviously this is done in simulation and not even a robust simulation suite at that
5. Sometimes, the path generated by IK-RRT is extremely unoptimal and honestly straight up terrible


### Future Work
While I don't plan to immediately look at starting any subsequent work, I think it is good to lay my thoughts out because I do think this is a problem that will be very interesting to come back to in a decade or so. So here are some ideas(in order of increasing complexity) for future works:
- Incorporating more interesting objects for construction, with more variety as well
- Actually repairing/building a bridge or connection of some sort to "expand" the station so that the task being completed is more useful
- Higher fidelity simulation. Having materials floating in space does not make sense, but what about randomly adding damage to the system and seeing how quickly the agent can repair the damage and if things are floating in space, they are floating with some velocity(relative to the structure).
- Using a learning based approach to this problem, making this robot autonomously able to complete tasks etc(send me a message if you want my thoughts on this in more depth)
- Add more end effectors -- learning will definitely help more on this side than with just the two end effectors
- Multiagent -- imagine countless canadarms traversing this structure to work to complete a task
- If it wasn't clear already, all the above are great, but we want to minimize human intervention. These robots should be fully autonomous

The applications of these could be very important to sustaining life in space at a larger scale.

## Credit
This project was made for a class at the University of Minnesota CSCI 5551 in the Spring 2024 taught by Professor Karthik Designh. I would also like to thank Thomas Weber, Kuba Kedzior for being excellent group members.

## References
[1] M. Vande Weghe, D. Ferguson, and S. S. Srinivasa, "Randomized path planning for redundant manipulators without inverse kinematics," IEEE-RAS International Conference on Humanoid Robots (HUMANOIDS), pp. 477–482, 2007.


