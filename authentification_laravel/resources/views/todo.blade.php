<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="/Todo" method="POST">
        @csrf
        Add Task : <input type="text" name="name">
        <button>Add</button>
    </form>

        @foreach ($todos as $todo)
            <h1>{{ $todo->name }}</h1>
        @endforeach
</body>
</html>
