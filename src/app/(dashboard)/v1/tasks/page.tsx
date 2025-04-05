"use client"
import { MoreHoriz } from '@mui/icons-material';
import { Button, Card, CardContent, IconButton, List, ListItem, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';

interface Task {
    id: number;
    name: string;
    assignmentDate: string;
    endDate: string;
    members: string[];
}

interface Tasks {
    todo: Task[];
    inProgress: Task[];
    completed: Task[];
}

const Page: React.FC = () => {
    const [tasks, setTasks] = useState<Tasks>({
        todo: [
            { id: 1, name: 'Task 1', assignmentDate: '2023-10-01', endDate: '2023-10-05', members: ['Member A'] },
            { id: 2, name: 'Task 2', assignmentDate: '2023-10-02', endDate: '2023-10-06', members: ['Member B'] },
            { id: 3, name: 'Task 3', assignmentDate: '2023-10-03', endDate: '2023-10-07', members: ['Member C'] },
            { id: 4, name: 'Task 4', assignmentDate: '2023-10-04', endDate: '2023-10-08', members: ['Member D'] },
        ],
        inProgress: [],
        completed: [],
    });

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, column: keyof Tasks) => {
        e.preventDefault();
        const taskId = parseInt(e.dataTransfer.getData('text/plain'));
        setTasks(prevTasks => {
            const newTasks = { ...prevTasks };
            // Remove task from its original column
            for (const key in newTasks) {
                newTasks[key as keyof typeof newTasks] = newTasks[key as keyof typeof newTasks].filter((t) => t.id !== taskId);
            }
            // Add task to the new column
            const taskToMove = prevTasks.todo.find(task => task.id === taskId) ||
                prevTasks.inProgress.find(task => task.id === taskId) ||
                prevTasks.completed.find(task => task.id === taskId);
            if (taskToMove) {
                newTasks[column].push(taskToMove);
            }
            return newTasks;
        });
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDragStart = (e: React.DragEvent<HTMLLIElement>, taskId: number) => {
        e.dataTransfer.setData('text/plain', taskId.toString());
    };

    const addTask = (column: keyof Tasks) => {
        const newTaskName = prompt('Enter new task:');
        if (newTaskName) {
            const newTask: Task = {
                id: Date.now(),
                name: newTaskName,
                assignmentDate: new Date().toISOString().split('T')[0],
                endDate: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString().split('T')[0],
                members: [],
            };
            setTasks(prevTasks => ({
                ...prevTasks,
                [column]: [...prevTasks[column], newTask],
            }));
        }
    };

    return (
        <div className="flex space-x-4 p-0 box-border overflow-hidden">
            <Paper className="flex-1 p-4 overflow-auto" onDrop={(e) => handleDrop(e, 'todo')} onDragOver={handleDragOver}>
                <Typography variant="h6">To Do Tasks</Typography>
                <Button onClick={() => addTask('todo')} className="add-task-button">+</Button>
                <List>
                    {tasks.todo.map(task => (
                        <ListItem key={task.id} draggable onDragStart={(e) => handleDragStart(e, task.id)}>
                            <Card variant='outlined' sx={{ width: '100%', position: 'relative' }}>
                                <IconButton sx={{ position: 'absolute', top: 8, right: 8 }}>
                                    <MoreHoriz />
                                </IconButton>
                                <CardContent>
                                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 9 }}>
                                        <strong>Task ID:</strong> {task.id}
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: 12 }}>
                                        {task.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ display: 'inline-block', margin: '0 0', fontSize: 10 }}>
                                        <strong>Assignment Date:</strong> {task.assignmentDate}
                                    </Typography>
                                    <Typography variant="body2" sx={{ display: 'inline-block', margin: '0 0', fontSize: 10 }}>
                                        <strong>&nbsp; | End Date:</strong> {task.endDate}
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: '0 0', fontSize: 10 }}>
                                        <strong>Members:</strong> {task.members.join(', ')}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <Paper className="flex-1 p-4 overflow-auto" onDrop={(e) => handleDrop(e, 'inProgress')} onDragOver={handleDragOver}>
                <Typography variant="h6">In Progress</Typography>
                <Button onClick={() => addTask('inProgress')} className="add-task-button">+</Button>
                <List>
                    {tasks.inProgress.map(task => (
                        <ListItem key={task.id} draggable onDragStart={(e) => handleDragStart(e, task.id)}>
                            <Card variant='outlined' sx={{ width: '100%', position: 'relative' }}>
                                <IconButton sx={{ position: 'absolute', top: 8, right: 8 }}>
                                    <MoreHoriz />
                                </IconButton>
                                <CardContent>
                                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 9 }}>
                                        <strong>Task ID:</strong> {task.id}
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: 12 }}>
                                        {task.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ display: 'inline-block', margin: '0 0', fontSize: 10 }}>
                                        <strong>Assignment Date:</strong> {task.assignmentDate}
                                    </Typography>
                                    <Typography variant="body2" sx={{ display: 'inline-block', margin: '0 0', fontSize: 10 }}>
                                        <strong>&nbsp; | End Date:</strong> {task.endDate}
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: '0 0', fontSize: 10 }}>
                                        <strong>Members:</strong> {task.members.join(', ')}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <Paper className="flex-1 p-4 overflow-auto" onDrop={(e) => handleDrop(e, 'completed')} onDragOver={handleDragOver}>
                <Typography variant="h6">Completed Tasks</Typography>
                <Button onClick={() => addTask('completed')} className="add-task-button">+</Button>
                <List>
                    {tasks.completed.map(task => (
                        <ListItem key={task.id} draggable onDragStart={(e) => handleDragStart(e, task.id)}>
                            <Card variant='outlined' sx={{ width: '100%', height: 'fit-content', position: 'relative' }}>
                                <IconButton sx={{ position: 'absolute', top: 8, right: 8 }}>
                                    <MoreHoriz />
                                </IconButton>
                                <CardContent>
                                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 9 }}>
                                        <strong>Task ID:</strong> {task.id}
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: 12 }}>
                                        {task.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ display: 'inline-block', margin: '0 0', fontSize: 10 }}>
                                        <strong>Assignment Date:</strong> {task.assignmentDate}
                                    </Typography>
                                    <Typography variant="body2" sx={{ display: 'inline-block', margin: '0 0', fontSize: 10 }}>
                                        <strong>&nbsp; | End Date:</strong> {task.endDate}
                                    </Typography>
                                    <Typography variant="body2" sx={{ margin: '0 0', fontSize: 10 }}>
                                        <strong>Members:</strong> {task.members.join(', ')}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </div>
    );
}

export default Page;