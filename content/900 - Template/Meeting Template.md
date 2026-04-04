
---
tags:
  -  <%* result.get("Project")%>
date: <% tp.date.now("YYYY-MM-DD") %>
project: <% result.get("Project") %> 
type: Meeting
meetingType: <% result.get("Meeting Name") %>
people: <% result.get("Participants") %>
duration: <% result.get("Duration") %>
---
# <% result.get("Project") %>:   <% result.get("Meeting Name") %> - <% tp.date.now("MMMM Do YYYY") %>

## Agenda



## Meeting Notes

- 

## Key Decisions

- 

## Follow-up

- [ ] 

## Next Meeting

**Date:** <% tp.date.now("YYYY-MM-DD", 7) %>
**Time:** <% tp.date.now("HH:mm") %>

## Related



<% await tp.file.rename(tp.date.now("YYYY-MM-DD")+" - "+result.get("Meeting Name")+" ")%>